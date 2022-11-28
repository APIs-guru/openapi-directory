import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1CanaryEvaluationMetricLabels } from "./googlecloudapigeev1canaryevaluationmetriclabels";



// GoogleCloudApigeeV1CanaryEvaluationInput
/** 
 * CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
**/
export class GoogleCloudApigeeV1CanaryEvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metricLabels" })
  metricLabels?: GoogleCloudApigeeV1CanaryEvaluationMetricLabels;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=treatment" })
  treatment?: string;
}
