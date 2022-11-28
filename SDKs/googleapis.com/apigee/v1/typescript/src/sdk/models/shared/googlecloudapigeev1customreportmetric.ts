import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1CustomReportMetric
/** 
 * This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum
**/
export class GoogleCloudApigeeV1CustomReportMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
