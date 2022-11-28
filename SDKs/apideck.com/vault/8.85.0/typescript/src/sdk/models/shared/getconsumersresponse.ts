import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";
import { Links } from "./links";
import { Meta } from "./meta";



export class GetConsumersResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregated_request_count" })
  aggregatedRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId?: string;

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


export class GetConsumersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetConsumersResponseData })
  data: GetConsumersResponseData[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
