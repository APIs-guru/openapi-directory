import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsDeleteMembershipPathParams extends SpeakeasyBase {
    membershipId: string;
    teamId: string;
}
export declare class TeamsDeleteMembershipSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class TeamsDeleteMembershipRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteMembershipPathParams;
    security: TeamsDeleteMembershipSecurity;
}
export declare class TeamsDeleteMembershipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
