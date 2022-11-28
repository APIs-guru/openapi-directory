import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticBeanstalkEnvironmentEnvironmentLink
/** 
 * Contains information about a link to another environment that is in the same group.
**/
export class AwsElasticBeanstalkEnvironmentEnvironmentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName?: string;
}
