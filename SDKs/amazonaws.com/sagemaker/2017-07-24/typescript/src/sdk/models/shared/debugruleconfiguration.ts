import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";


// DebugRuleConfiguration
/** 
 * Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the <code>DebugRuleConfiguration</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
**/
export class DebugRuleConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: ProcessingInstanceTypeEnum;

  @Metadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @Metadata({ data: "json, name=RuleConfigurationName" })
  ruleConfigurationName: string;

  @Metadata({ data: "json, name=RuleEvaluatorImage" })
  ruleEvaluatorImage: string;

  @Metadata({ data: "json, name=RuleParameters" })
  ruleParameters?: Map<string, string>;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath?: string;

  @Metadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
