import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveMembershipForUserLegacyPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsRemoveMembershipForUserLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveMembershipForUserLegacyPathParams;
}
export declare class TeamsRemoveMembershipForUserLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
