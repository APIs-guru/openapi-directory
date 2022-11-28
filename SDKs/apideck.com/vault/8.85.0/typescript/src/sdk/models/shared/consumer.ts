import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerConnection } from "./consumerconnection";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";



export class Consumer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregated_request_count" })
  aggregatedRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=connections", elemType: ConsumerConnection })
  connections?: ConsumerConnection[];

  @SpeakeasyMetadata({ data: "json, name=consumer_id" })
  consumerId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ConsumerMetadata;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: string;

  @SpeakeasyMetadata({ data: "json, name=request_count_updated" })
  requestCountUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=request_counts" })
  requestCounts?: RequestCountAllocation;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: string[];
}
