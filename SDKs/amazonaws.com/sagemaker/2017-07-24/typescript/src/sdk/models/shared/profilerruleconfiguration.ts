import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";


// ProfilerRuleConfiguration
/** 
 * Configuration information for profiling rules.
**/
export class ProfilerRuleConfiguration extends SpeakeasyBase {
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
