import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerConnection } from "./consumerconnection";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";
export declare class Consumer extends SpeakeasyBase {
    aggregatedRequestCount?: number;
    applicationId?: string;
    connections?: ConsumerConnection[];
    consumerId?: string;
    created?: string;
    metadata?: ConsumerMetadata;
    modified?: string;
    requestCountUpdated?: string;
    requestCounts?: RequestCountAllocation;
    services?: string[];
}
