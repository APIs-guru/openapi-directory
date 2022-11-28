import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticBeanstalkEnvironmentEnvironmentLink } from "./awselasticbeanstalkenvironmentenvironmentlink";
import { AwsElasticBeanstalkEnvironmentOptionSetting } from "./awselasticbeanstalkenvironmentoptionsetting";
import { AwsElasticBeanstalkEnvironmentTier } from "./awselasticbeanstalkenvironmenttier";
/**
 * Contains details about an Elastic Beanstalk environment.
**/
export declare class AwsElasticBeanstalkEnvironmentDetails extends SpeakeasyBase {
    applicationName?: string;
    cname?: string;
    dateCreated?: string;
    dateUpdated?: string;
    description?: string;
    endpointUrl?: string;
    environmentArn?: string;
    environmentId?: string;
    environmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];
    environmentName?: string;
    optionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];
    platformArn?: string;
    solutionStackName?: string;
    status?: string;
    tier?: AwsElasticBeanstalkEnvironmentTier;
    versionLabel?: string;
}
