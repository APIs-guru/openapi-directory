import { SpeakeasyBase } from "../../../internal/utils";
import { RequestCountAllocation } from "./requestcountallocation";
export declare class ConsumerRequestCountsInDateRangeResponseData extends SpeakeasyBase {
    aggregatedRequestCount?: number;
    applicationId?: string;
    consumerId?: string;
    endDatetime?: string;
    requestCounts?: RequestCountAllocation;
    startDatetime?: string;
}
export declare class ConsumerRequestCountsInDateRangeResponse extends SpeakeasyBase {
    data: ConsumerRequestCountsInDateRangeResponseData;
    status: string;
    statusCode: number;
}
