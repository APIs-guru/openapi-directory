import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsElasticBeanstalkEnvironmentEnvironmentLink } from "./awselasticbeanstalkenvironmentenvironmentlink";
import { AwsElasticBeanstalkEnvironmentOptionSetting } from "./awselasticbeanstalkenvironmentoptionsetting";
import { AwsElasticBeanstalkEnvironmentTier } from "./awselasticbeanstalkenvironmenttier";


// AwsElasticBeanstalkEnvironmentDetails
/** 
 * Contains details about an Elastic Beanstalk environment.
**/
export class AwsElasticBeanstalkEnvironmentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=Cname" })
  cname?: string;

  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=DateUpdated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndpointUrl" })
  endpointUrl?: string;

  @Metadata({ data: "json, name=EnvironmentArn" })
  environmentArn?: string;

  @Metadata({ data: "json, name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=EnvironmentLinks", elemType: shared.AwsElasticBeanstalkEnvironmentEnvironmentLink })
  environmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];

  @Metadata({ data: "json, name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "json, name=OptionSettings", elemType: shared.AwsElasticBeanstalkEnvironmentOptionSetting })
  optionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];

  @Metadata({ data: "json, name=PlatformArn" })
  platformArn?: string;

  @Metadata({ data: "json, name=SolutionStackName" })
  solutionStackName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Tier" })
  tier?: AwsElasticBeanstalkEnvironmentTier;

  @Metadata({ data: "json, name=VersionLabel" })
  versionLabel?: string;
}
