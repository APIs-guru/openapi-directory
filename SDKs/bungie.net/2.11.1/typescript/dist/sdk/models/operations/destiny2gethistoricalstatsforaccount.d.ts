import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetHistoricalStatsForAccountPathParams extends SpeakeasyBase {
    destinyMembershipId: number;
    membershipType: number;
}
export declare class Destiny2GetHistoricalStatsForAccountQueryParams extends SpeakeasyBase {
    groups?: number[];
}
export declare class Destiny2GetHistoricalStatsForAccountRequest extends SpeakeasyBase {
    pathParams: Destiny2GetHistoricalStatsForAccountPathParams;
    queryParams: Destiny2GetHistoricalStatsForAccountQueryParams;
}
export declare class Destiny2GetHistoricalStatsForAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
