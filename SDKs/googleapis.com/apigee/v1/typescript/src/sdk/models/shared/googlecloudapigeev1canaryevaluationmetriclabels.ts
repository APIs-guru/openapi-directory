import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1CanaryEvaluationMetricLabels
/** 
 * Labels that can be used to filter Apigee metrics.
**/
export class GoogleCloudApigeeV1CanaryEvaluationMetricLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=env" })
  env?: string;

  @Metadata({ data: "json, name=instance_id" })
  instanceId?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
