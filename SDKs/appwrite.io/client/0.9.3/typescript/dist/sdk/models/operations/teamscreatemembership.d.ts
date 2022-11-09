import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TeamsCreateMembershipPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class TeamsCreateMembershipRequestBody extends SpeakeasyBase {
    email: string;
    name?: string;
    roles: string[];
    url: string;
}
export declare class TeamsCreateMembershipSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class TeamsCreateMembershipRequest extends SpeakeasyBase {
    pathParams: TeamsCreateMembershipPathParams;
    request?: TeamsCreateMembershipRequestBody;
    security: TeamsCreateMembershipSecurity;
}
export declare class TeamsCreateMembershipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    membership?: shared.Membership;
}
