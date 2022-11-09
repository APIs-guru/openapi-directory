import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1CanaryEvaluationMetricLabels } from "./googlecloudapigeev1canaryevaluationmetriclabels";

export enum GoogleCloudApigeeV1CanaryEvaluationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
}

export enum GoogleCloudApigeeV1CanaryEvaluationVerdictEnum {
    VerdictUnspecified = "VERDICT_UNSPECIFIED"
,    None = "NONE"
,    Fail = "FAIL"
,    Pass = "PASS"
}


// GoogleCloudApigeeV1CanaryEvaluation
/** 
 * CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
**/
export class GoogleCloudApigeeV1CanaryEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=metricLabels" })
  metricLabels?: GoogleCloudApigeeV1CanaryEvaluationMetricLabels;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1CanaryEvaluationStateEnum;

  @Metadata({ data: "json, name=treatment" })
  treatment?: string;

  @Metadata({ data: "json, name=verdict" })
  verdict?: GoogleCloudApigeeV1CanaryEvaluationVerdictEnum;
}
