import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetHistoricalStatsPathParams extends SpeakeasyBase {
    characterId: number;
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetHistoricalStatsQueryParams extends SpeakeasyBase {
    dayend?: Date;
    daystart?: Date;
    groups?: number[];
    modes?: number[];
    periodType?: number;
}
export declare class Destiny2GetHistoricalStatsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetHistoricalStatsPathParams;
    queryParams: Destiny2GetHistoricalStatsQueryParams;
}
export declare class Destiny2GetHistoricalStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
