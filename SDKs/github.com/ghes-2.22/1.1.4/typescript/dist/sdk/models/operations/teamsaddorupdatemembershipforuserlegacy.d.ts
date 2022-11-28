import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsAddOrUpdateMembershipForUserLegacyPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare enum TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyRequestBody extends SpeakeasyBase {
    role?: TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateMembershipForUserLegacyPathParams;
    request?: TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
}
export declare class TeamsAddOrUpdateMembershipForUserLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamMembership?: shared.TeamMembership;
}
