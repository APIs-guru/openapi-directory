import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2GetClanAggregateStatsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class Destiny2GetClanAggregateStatsQueryParams extends SpeakeasyBase {
    modes?: string;
}
export declare class Destiny2GetClanAggregateStatsRequest extends SpeakeasyBase {
    pathParams: Destiny2GetClanAggregateStatsPathParams;
    queryParams: Destiny2GetClanAggregateStatsQueryParams;
}
export declare class Destiny2GetClanAggregateStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
