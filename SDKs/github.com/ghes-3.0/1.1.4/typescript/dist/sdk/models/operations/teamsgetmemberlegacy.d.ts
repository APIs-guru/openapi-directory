import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsGetMemberLegacyPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsGetMemberLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsGetMemberLegacyPathParams;
}
export declare class TeamsGetMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
