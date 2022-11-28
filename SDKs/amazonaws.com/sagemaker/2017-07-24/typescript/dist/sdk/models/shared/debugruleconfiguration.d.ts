import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";
/**
 * Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the <code>DebugRuleConfiguration</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
**/
export declare class DebugRuleConfiguration extends SpeakeasyBase {
    instanceType?: ProcessingInstanceTypeEnum;
    localPath?: string;
    ruleConfigurationName: string;
    ruleEvaluatorImage: string;
    ruleParameters?: Map<string, string>;
    s3OutputPath?: string;
    volumeSizeInGb?: number;
}
