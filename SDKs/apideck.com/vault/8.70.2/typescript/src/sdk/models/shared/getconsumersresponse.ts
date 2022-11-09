import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";
import { Links } from "./links";
import { Meta } from "./meta";


export class GetConsumersResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregated_request_count" })
  aggregatedRequestCount?: number;

  @Metadata({ data: "json, name=application_id" })
  applicationId?: string;

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


export class GetConsumersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.GetConsumersResponseData })
  data: GetConsumersResponseData[];

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
