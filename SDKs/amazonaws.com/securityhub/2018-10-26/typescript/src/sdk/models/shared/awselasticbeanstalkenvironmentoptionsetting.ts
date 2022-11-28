import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticBeanstalkEnvironmentOptionSetting
/** 
 * A configuration option setting for the environment.
**/
export class AwsElasticBeanstalkEnvironmentOptionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=OptionName" })
  optionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
