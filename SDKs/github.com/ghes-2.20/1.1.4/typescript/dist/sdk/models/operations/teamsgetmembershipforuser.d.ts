import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetMembershipForUserPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsGetMembershipForUserRequest extends SpeakeasyBase {
    pathParams: TeamsGetMembershipForUserPathParams;
}
export declare class TeamsGetMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamMembership?: shared.TeamMembership;
}
