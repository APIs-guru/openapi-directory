import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1QueryMetric
/** 
 * More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics
**/
export class GoogleCloudApigeeV1QueryMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
