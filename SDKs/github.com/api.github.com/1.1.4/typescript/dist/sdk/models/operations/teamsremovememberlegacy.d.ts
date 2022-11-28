import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveMemberLegacyPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsRemoveMemberLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveMemberLegacyPathParams;
}
export declare class TeamsRemoveMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
