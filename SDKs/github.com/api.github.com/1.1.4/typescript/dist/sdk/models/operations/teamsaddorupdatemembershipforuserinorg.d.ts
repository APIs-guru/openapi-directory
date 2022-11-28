import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsAddOrUpdateMembershipForUserInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
    username: string;
}
export declare enum TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgRequestBody extends SpeakeasyBase {
    role?: TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    field?: string;
    resource?: string;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson extends SpeakeasyBase {
    errors?: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors[];
    message?: string;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateMembershipForUserInOrgPathParams;
    request?: TeamsAddOrUpdateMembershipForUserInOrgRequestBody;
}
export declare class TeamsAddOrUpdateMembershipForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamMembership?: shared.TeamMembership;
    teamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonObject?: TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJson;
}
