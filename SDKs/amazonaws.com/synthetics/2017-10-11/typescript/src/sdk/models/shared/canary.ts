import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ArtifactS3Location" })
  artifactS3Location?: string;

  @Metadata({ data: "json, name=Code" })
  code?: CanaryCodeOutput;

  @Metadata({ data: "json, name=EngineArn" })
  engineArn?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=FailureRetentionPeriodInDays" })
  failureRetentionPeriodInDays?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RunConfig" })
  runConfig?: CanaryRunConfigOutput;

  @Metadata({ data: "json, name=RuntimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: CanaryScheduleOutput;

  @Metadata({ data: "json, name=Status" })
  status?: CanaryStatus;

  @Metadata({ data: "json, name=SuccessRetentionPeriodInDays" })
  successRetentionPeriodInDays?: number;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: CanaryTimeline;

  @Metadata({ data: "json, name=VisualReference" })
  visualReference?: VisualReferenceOutput;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfigOutput;
}
