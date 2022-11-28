import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticBeanstalkEnvironmentEnvironmentLink } from "./awselasticbeanstalkenvironmentenvironmentlink";
import { AwsElasticBeanstalkEnvironmentOptionSetting } from "./awselasticbeanstalkenvironmentoptionsetting";
import { AwsElasticBeanstalkEnvironmentTier } from "./awselasticbeanstalkenvironmenttier";



// AwsElasticBeanstalkEnvironmentDetails
/** 
 * Contains details about an Elastic Beanstalk environment.
**/
export class AwsElasticBeanstalkEnvironmentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=Cname" })
  cname?: string;

  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=DateUpdated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentArn" })
  environmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentLinks", elemType: AwsElasticBeanstalkEnvironmentEnvironmentLink })
  environmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];

  @SpeakeasyMetadata({ data: "json, name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=OptionSettings", elemType: AwsElasticBeanstalkEnvironmentOptionSetting })
  optionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];

  @SpeakeasyMetadata({ data: "json, name=PlatformArn" })
  platformArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SolutionStackName" })
  solutionStackName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: AwsElasticBeanstalkEnvironmentTier;

  @SpeakeasyMetadata({ data: "json, name=VersionLabel" })
  versionLabel?: string;
}
