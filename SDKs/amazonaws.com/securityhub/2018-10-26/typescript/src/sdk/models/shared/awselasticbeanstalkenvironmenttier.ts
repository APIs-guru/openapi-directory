import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticBeanstalkEnvironmentTier
/** 
 * Contains information about the tier of the environment.
**/
export class AwsElasticBeanstalkEnvironmentTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
