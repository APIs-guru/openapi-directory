import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticBeanstalkEnvironmentOptionSetting
/** 
 * A configuration option setting for the environment.
**/
export class AwsElasticBeanstalkEnvironmentOptionSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=Namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=OptionName" })
  optionName?: string;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
