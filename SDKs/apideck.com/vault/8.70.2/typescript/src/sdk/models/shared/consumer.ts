import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumerConnection } from "./consumerconnection";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";


export class Consumer extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregated_request_count" })
  aggregatedRequestCount?: number;

  @Metadata({ data: "json, name=application_id" })
  applicationId?: string;

  @Metadata({ data: "json, name=connections", elemType: shared.ConsumerConnection })
  connections?: ConsumerConnection[];

  @Metadata({ data: "json, name=consumer_id" })
  consumerId?: string;

  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ConsumerMetadata;

  @Metadata({ data: "json, name=modified" })
  modified?: string;

  @Metadata({ data: "json, name=request_count_updated" })
  requestCountUpdated?: string;

  @Metadata({ data: "json, name=request_counts" })
  requestCounts?: RequestCountAllocation;

  @Metadata({ data: "json, name=services" })
  services?: string[];
}
