import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveMembershipForUserPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsRemoveMembershipForUserRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveMembershipForUserPathParams;
}
export declare class TeamsRemoveMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
