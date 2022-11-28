import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1MetricAggregation } from "./googlecloudapigeev1metricaggregation";
import { GoogleTypeInterval } from "./googletypeinterval";



// GoogleCloudApigeeV1QueryTabularStatsRequest
/** 
 * Request payload representing the query to be run for fetching security statistics as rows.
**/
export class GoogleCloudApigeeV1QueryTabularStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1MetricAggregation })
  metrics?: GoogleCloudApigeeV1MetricAggregation[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;
}
