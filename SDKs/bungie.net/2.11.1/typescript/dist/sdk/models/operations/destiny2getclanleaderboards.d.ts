import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetClanLeaderboardsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class Destiny2GetClanLeaderboardsQueryParams extends SpeakeasyBase {
    maxtop?: number;
    modes?: string;
    statid?: string;
}
export declare class Destiny2GetClanLeaderboardsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetClanLeaderboardsPathParams;
    queryParams: Destiny2GetClanLeaderboardsQueryParams;
}
export declare class Destiny2GetClanLeaderboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
