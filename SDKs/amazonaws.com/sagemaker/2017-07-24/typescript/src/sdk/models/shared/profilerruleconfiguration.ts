import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";



// ProfilerRuleConfiguration
/** 
 * Configuration information for profiling rules.
**/
export class ProfilerRuleConfiguration extends SpeakeasyBase {
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
