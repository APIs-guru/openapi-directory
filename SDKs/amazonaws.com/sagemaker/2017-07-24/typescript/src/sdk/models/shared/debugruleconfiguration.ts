import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";



// DebugRuleConfiguration
/** 
 * Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the <code>DebugRuleConfiguration</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
**/
export class DebugRuleConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: ProcessingInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleConfigurationName" })
  ruleConfigurationName: string;

  @SpeakeasyMetadata({ data: "json, name=RuleEvaluatorImage" })
  ruleEvaluatorImage: string;

  @SpeakeasyMetadata({ data: "json, name=RuleParameters" })
  ruleParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb?: number;
}
