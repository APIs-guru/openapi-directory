import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestCountAllocation } from "./requestcountallocation";


export class ConsumerRequestCountsInDateRangeResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregated_request_count" })
  aggregatedRequestCount?: number;

  @Metadata({ data: "json, name=application_id" })
  applicationId?: string;

  @Metadata({ data: "json, name=consumer_id" })
  consumerId?: string;

  @Metadata({ data: "json, name=end_datetime" })
  endDatetime?: string;

  @Metadata({ data: "json, name=request_counts" })
  requestCounts?: RequestCountAllocation;

  @Metadata({ data: "json, name=start_datetime" })
  startDatetime?: string;
}


export class ConsumerRequestCountsInDateRangeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: ConsumerRequestCountsInDateRangeResponseData;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
