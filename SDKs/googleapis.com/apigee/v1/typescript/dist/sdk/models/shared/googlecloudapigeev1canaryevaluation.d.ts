import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1CanaryEvaluationMetricLabels } from "./googlecloudapigeev1canaryevaluationmetriclabels";
/**
 * CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
**/
export declare class GoogleCloudApigeeV1CanaryEvaluationInput extends SpeakeasyBase {
    control?: string;
    endTime?: string;
    metricLabels?: GoogleCloudApigeeV1CanaryEvaluationMetricLabels;
    startTime?: string;
    treatment?: string;
}
