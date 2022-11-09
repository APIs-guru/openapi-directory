import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1CustomReportMetric
/** 
 * This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum
**/
export class GoogleCloudApigeeV1CustomReportMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
