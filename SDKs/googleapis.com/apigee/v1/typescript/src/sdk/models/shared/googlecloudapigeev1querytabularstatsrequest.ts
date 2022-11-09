import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1MetricAggregation } from "./googlecloudapigeev1metricaggregation";
import { GoogleTypeInterval } from "./googletypeinterval";


// GoogleCloudApigeeV1QueryTabularStatsRequest
/** 
 * Request payload representing the query to be run for fetching security statistics as rows.
**/
export class GoogleCloudApigeeV1QueryTabularStatsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudApigeeV1MetricAggregation })
  metrics?: GoogleCloudApigeeV1MetricAggregation[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;
}
