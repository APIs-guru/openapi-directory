import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsAddOrUpdateMembershipForUserPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare enum TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserRequestBody extends SpeakeasyBase {
    role?: TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserRequest extends SpeakeasyBase {
    pathParams: TeamsAddOrUpdateMembershipForUserPathParams;
    request?: TeamsAddOrUpdateMembershipForUserRequestBody;
}
export declare class TeamsAddOrUpdateMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamMembership?: shared.TeamMembership;
}
