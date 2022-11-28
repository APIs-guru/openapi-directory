import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateMembershipRolesPathParams extends SpeakeasyBase {
    membershipId: string;
    teamId: string;
}
export declare class TeamsUpdateMembershipRolesRequestBody extends SpeakeasyBase {
    roles: string[];
}
export declare class TeamsUpdateMembershipRolesSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class TeamsUpdateMembershipRolesRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateMembershipRolesPathParams;
    request?: TeamsUpdateMembershipRolesRequestBody;
    security: TeamsUpdateMembershipRolesSecurity;
}
export declare class TeamsUpdateMembershipRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    membership?: shared.Membership;
}
