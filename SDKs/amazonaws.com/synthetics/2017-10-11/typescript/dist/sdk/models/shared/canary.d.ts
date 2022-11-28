import { SpeakeasyBase } from "../../../internal/utils";
import { CanaryCodeOutput } from "./canarycodeoutput";
import { CanaryRunConfigOutput } from "./canaryrunconfigoutput";
import { CanaryScheduleOutput } from "./canaryscheduleoutput";
import { CanaryStatus } from "./canarystatus";
import { CanaryTimeline } from "./canarytimeline";
import { VisualReferenceOutput } from "./visualreferenceoutput";
import { VpcConfigOutput } from "./vpcconfigoutput";
/**
 * This structure contains all information about one canary in your account.
**/
export declare class Canary extends SpeakeasyBase {
    artifactS3Location?: string;
    code?: CanaryCodeOutput;
    engineArn?: string;
    executionRoleArn?: string;
    failureRetentionPeriodInDays?: number;
    id?: string;
    name?: string;
    runConfig?: CanaryRunConfigOutput;
    runtimeVersion?: string;
    schedule?: CanaryScheduleOutput;
    status?: CanaryStatus;
    successRetentionPeriodInDays?: number;
    tags?: Map<string, string>;
    timeline?: CanaryTimeline;
    visualReference?: VisualReferenceOutput;
    vpcConfig?: VpcConfigOutput;
}
