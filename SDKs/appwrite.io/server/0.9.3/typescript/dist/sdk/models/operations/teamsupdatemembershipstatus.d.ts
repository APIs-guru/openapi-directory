import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateMembershipStatusPathParams extends SpeakeasyBase {
    membershipId: string;
    teamId: string;
}
export declare class TeamsUpdateMembershipStatusRequestBody extends SpeakeasyBase {
    secret: string;
    userId: string;
}
export declare class TeamsUpdateMembershipStatusSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class TeamsUpdateMembershipStatusRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateMembershipStatusPathParams;
    request?: TeamsUpdateMembershipStatusRequestBody;
    security: TeamsUpdateMembershipStatusSecurity;
}
export declare class TeamsUpdateMembershipStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    membership?: shared.Membership;
}
