import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryCodeOutput } from "./canarycodeoutput";
import { CanaryRunConfigOutput } from "./canaryrunconfigoutput";
import { CanaryScheduleOutput } from "./canaryscheduleoutput";
import { CanaryStatus } from "./canarystatus";
import { CanaryTimeline } from "./canarytimeline";
import { VisualReferenceOutput } from "./visualreferenceoutput";
import { VpcConfigOutput } from "./vpcconfigoutput";



// Canary
/** 
 * This structure contains all information about one canary in your account.
**/
export class Canary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactS3Location" })
  artifactS3Location?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: CanaryCodeOutput;

  @SpeakeasyMetadata({ data: "json, name=EngineArn" })
  engineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureRetentionPeriodInDays" })
  failureRetentionPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RunConfig" })
  runConfig?: CanaryRunConfigOutput;

  @SpeakeasyMetadata({ data: "json, name=RuntimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: CanaryScheduleOutput;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CanaryStatus;

  @SpeakeasyMetadata({ data: "json, name=SuccessRetentionPeriodInDays" })
  successRetentionPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Timeline" })
  timeline?: CanaryTimeline;

  @SpeakeasyMetadata({ data: "json, name=VisualReference" })
  visualReference?: VisualReferenceOutput;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfigOutput;
}
