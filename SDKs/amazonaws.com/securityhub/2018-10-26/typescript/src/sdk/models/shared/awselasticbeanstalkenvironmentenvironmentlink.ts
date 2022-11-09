import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticBeanstalkEnvironmentEnvironmentLink
/** 
 * Contains information about a link to another environment that is in the same group.
**/
export class AwsElasticBeanstalkEnvironmentEnvironmentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "json, name=LinkName" })
  linkName?: string;
}
