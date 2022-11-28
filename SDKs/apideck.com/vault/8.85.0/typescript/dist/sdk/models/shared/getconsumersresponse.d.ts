import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetConsumersResponseData extends SpeakeasyBase {
    aggregatedRequestCount?: number;
    applicationId?: string;
    consumerId?: string;
    created?: string;
    metadata?: ConsumerMetadata;
    modified?: string;
    requestCountUpdated?: string;
    requestCounts?: RequestCountAllocation;
    services?: string[];
}
export declare class GetConsumersResponse extends SpeakeasyBase {
    data: GetConsumersResponseData[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
