import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1QueryMetric
/** 
 * More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics
**/
export class GoogleCloudApigeeV1QueryMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
