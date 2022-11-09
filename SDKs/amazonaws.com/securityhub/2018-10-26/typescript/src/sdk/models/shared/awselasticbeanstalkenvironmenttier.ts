import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticBeanstalkEnvironmentTier
/** 
 * Contains information about the tier of the environment.
**/
export class AwsElasticBeanstalkEnvironmentTier extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
