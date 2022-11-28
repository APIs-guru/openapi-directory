import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetLeaderboardsPathParams extends SpeakeasyBase {
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetLeaderboardsQueryParams extends SpeakeasyBase {
    maxtop?: number;
    modes?: string;
    statid?: string;
}
export declare class Destiny2GetLeaderboardsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetLeaderboardsPathParams;
    queryParams: Destiny2GetLeaderboardsQueryParams;
}
export declare class Destiny2GetLeaderboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
