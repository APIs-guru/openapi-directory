import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestCountAllocation } from "./requestcountallocation";



export class ConsumerRequestCountsInDateRangeResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregated_request_count" })
  aggregatedRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=consumer_id" })
  consumerId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_datetime" })
  endDatetime?: string;

  @SpeakeasyMetadata({ data: "json, name=request_counts" })
  requestCounts?: RequestCountAllocation;

  @SpeakeasyMetadata({ data: "json, name=start_datetime" })
  startDatetime?: string;
}


export class ConsumerRequestCountsInDateRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ConsumerRequestCountsInDateRangeResponseData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
