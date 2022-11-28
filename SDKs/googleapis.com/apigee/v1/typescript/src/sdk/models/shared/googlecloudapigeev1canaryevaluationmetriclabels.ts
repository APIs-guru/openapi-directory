import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1CanaryEvaluationMetricLabels
/** 
 * Labels that can be used to filter Apigee metrics.
**/
export class GoogleCloudApigeeV1CanaryEvaluationMetricLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string;

  @SpeakeasyMetadata({ data: "json, name=instance_id" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
