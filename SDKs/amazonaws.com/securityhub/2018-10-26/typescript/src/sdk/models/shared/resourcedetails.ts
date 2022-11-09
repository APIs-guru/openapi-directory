import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsApiGatewayRestApiDetails } from "./awsapigatewayrestapidetails";
import { AwsApiGatewayStageDetails } from "./awsapigatewaystagedetails";
import { AwsApiGatewayV2ApiDetails } from "./awsapigatewayv2apidetails";
import { AwsApiGatewayV2StageDetails } from "./awsapigatewayv2stagedetails";
import { AwsAutoScalingAutoScalingGroupDetails } from "./awsautoscalingautoscalinggroupdetails";
import { AwsAutoScalingLaunchConfigurationDetails } from "./awsautoscalinglaunchconfigurationdetails";
import { AwsCertificateManagerCertificateDetails } from "./awscertificatemanagercertificatedetails";
import { AwsCloudFrontDistributionDetails } from "./awscloudfrontdistributiondetails";
import { AwsCloudTrailTrailDetails } from "./awscloudtrailtraildetails";
import { AwsCodeBuildProjectDetails } from "./awscodebuildprojectdetails";
import { AwsDynamoDbTableDetails } from "./awsdynamodbtabledetails";
import { AwsEc2EipDetails } from "./awsec2eipdetails";
import { AwsEc2InstanceDetails } from "./awsec2instancedetails";
import { AwsEc2NetworkAclDetails } from "./awsec2networkacldetails";
import { AwsEc2NetworkInterfaceDetails } from "./awsec2networkinterfacedetails";
import { AwsEc2SecurityGroupDetails } from "./awsec2securitygroupdetails";
import { AwsEc2SubnetDetails } from "./awsec2subnetdetails";
import { AwsEc2VolumeDetails } from "./awsec2volumedetails";
import { AwsEc2VpcDetails } from "./awsec2vpcdetails";
import { AwsEc2VpnConnectionDetails } from "./awsec2vpnconnectiondetails";
import { AwsEcrContainerImageDetails } from "./awsecrcontainerimagedetails";
import { AwsEcsClusterDetails } from "./awsecsclusterdetails";
import { AwsEcsServiceDetails } from "./awsecsservicedetails";
import { AwsEcsTaskDefinitionDetails } from "./awsecstaskdefinitiondetails";
import { AwsElasticBeanstalkEnvironmentDetails } from "./awselasticbeanstalkenvironmentdetails";
import { AwsElasticsearchDomainDetails } from "./awselasticsearchdomaindetails";
import { AwsElbLoadBalancerDetails } from "./awselbloadbalancerdetails";
import { AwsElbv2LoadBalancerDetails } from "./awselbv2loadbalancerdetails";
import { AwsIamAccessKeyDetails } from "./awsiamaccesskeydetails";
import { AwsIamGroupDetails } from "./awsiamgroupdetails";
import { AwsIamPolicyDetails } from "./awsiampolicydetails";
import { AwsIamRoleDetails } from "./awsiamroledetails";
import { AwsIamUserDetails } from "./awsiamuserdetails";
import { AwsKmsKeyDetails } from "./awskmskeydetails";
import { AwsLambdaFunctionDetails } from "./awslambdafunctiondetails";
import { AwsLambdaLayerVersionDetails } from "./awslambdalayerversiondetails";
import { AwsRdsDbClusterDetails } from "./awsrdsdbclusterdetails";
import { AwsRdsDbClusterSnapshotDetails } from "./awsrdsdbclustersnapshotdetails";
import { AwsRdsDbInstanceDetails } from "./awsrdsdbinstancedetails";
import { AwsRdsDbSnapshotDetails } from "./awsrdsdbsnapshotdetails";
import { AwsRdsEventSubscriptionDetails } from "./awsrdseventsubscriptiondetails";
import { AwsRedshiftClusterDetails } from "./awsredshiftclusterdetails";
import { AwsS3AccountPublicAccessBlockDetails } from "./awss3accountpublicaccessblockdetails";
import { AwsS3BucketDetails } from "./awss3bucketdetails";
import { AwsS3ObjectDetails } from "./awss3objectdetails";
import { AwsSecretsManagerSecretDetails } from "./awssecretsmanagersecretdetails";
import { AwsSnsTopicDetails } from "./awssnstopicdetails";
import { AwsSqsQueueDetails } from "./awssqsqueuedetails";
import { AwsSsmPatchComplianceDetails } from "./awsssmpatchcompliancedetails";
import { AwsWafWebAclDetails } from "./awswafwebacldetails";
import { ContainerDetails } from "./containerdetails";


// ResourceDetails
/** 
 * <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p>
**/
export class ResourceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsApiGatewayRestApi" })
  awsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  @Metadata({ data: "json, name=AwsApiGatewayStage" })
  awsApiGatewayStage?: AwsApiGatewayStageDetails;

  @Metadata({ data: "json, name=AwsApiGatewayV2Api" })
  awsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  @Metadata({ data: "json, name=AwsApiGatewayV2Stage" })
  awsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  @Metadata({ data: "json, name=AwsAutoScalingAutoScalingGroup" })
  awsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  @Metadata({ data: "json, name=AwsAutoScalingLaunchConfiguration" })
  awsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;

  @Metadata({ data: "json, name=AwsCertificateManagerCertificate" })
  awsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  @Metadata({ data: "json, name=AwsCloudFrontDistribution" })
  awsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  @Metadata({ data: "json, name=AwsCloudTrailTrail" })
  awsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  @Metadata({ data: "json, name=AwsCodeBuildProject" })
  awsCodeBuildProject?: AwsCodeBuildProjectDetails;

  @Metadata({ data: "json, name=AwsDynamoDbTable" })
  awsDynamoDbTable?: AwsDynamoDbTableDetails;

  @Metadata({ data: "json, name=AwsEc2Eip" })
  awsEc2Eip?: AwsEc2EipDetails;

  @Metadata({ data: "json, name=AwsEc2Instance" })
  awsEc2Instance?: AwsEc2InstanceDetails;

  @Metadata({ data: "json, name=AwsEc2NetworkAcl" })
  awsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  @Metadata({ data: "json, name=AwsEc2NetworkInterface" })
  awsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  @Metadata({ data: "json, name=AwsEc2SecurityGroup" })
  awsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  @Metadata({ data: "json, name=AwsEc2Subnet" })
  awsEc2Subnet?: AwsEc2SubnetDetails;

  @Metadata({ data: "json, name=AwsEc2Volume" })
  awsEc2Volume?: AwsEc2VolumeDetails;

  @Metadata({ data: "json, name=AwsEc2Vpc" })
  awsEc2Vpc?: AwsEc2VpcDetails;

  @Metadata({ data: "json, name=AwsEc2VpnConnection" })
  awsEc2VpnConnection?: AwsEc2VpnConnectionDetails;

  @Metadata({ data: "json, name=AwsEcrContainerImage" })
  awsEcrContainerImage?: AwsEcrContainerImageDetails;

  @Metadata({ data: "json, name=AwsEcsCluster" })
  awsEcsCluster?: AwsEcsClusterDetails;

  @Metadata({ data: "json, name=AwsEcsService" })
  awsEcsService?: AwsEcsServiceDetails;

  @Metadata({ data: "json, name=AwsEcsTaskDefinition" })
  awsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;

  @Metadata({ data: "json, name=AwsElasticBeanstalkEnvironment" })
  awsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  @Metadata({ data: "json, name=AwsElasticsearchDomain" })
  awsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  @Metadata({ data: "json, name=AwsElbLoadBalancer" })
  awsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  @Metadata({ data: "json, name=AwsElbv2LoadBalancer" })
  awsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  @Metadata({ data: "json, name=AwsIamAccessKey" })
  awsIamAccessKey?: AwsIamAccessKeyDetails;

  @Metadata({ data: "json, name=AwsIamGroup" })
  awsIamGroup?: AwsIamGroupDetails;

  @Metadata({ data: "json, name=AwsIamPolicy" })
  awsIamPolicy?: AwsIamPolicyDetails;

  @Metadata({ data: "json, name=AwsIamRole" })
  awsIamRole?: AwsIamRoleDetails;

  @Metadata({ data: "json, name=AwsIamUser" })
  awsIamUser?: AwsIamUserDetails;

  @Metadata({ data: "json, name=AwsKmsKey" })
  awsKmsKey?: AwsKmsKeyDetails;

  @Metadata({ data: "json, name=AwsLambdaFunction" })
  awsLambdaFunction?: AwsLambdaFunctionDetails;

  @Metadata({ data: "json, name=AwsLambdaLayerVersion" })
  awsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  @Metadata({ data: "json, name=AwsRdsDbCluster" })
  awsRdsDbCluster?: AwsRdsDbClusterDetails;

  @Metadata({ data: "json, name=AwsRdsDbClusterSnapshot" })
  awsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  @Metadata({ data: "json, name=AwsRdsDbInstance" })
  awsRdsDbInstance?: AwsRdsDbInstanceDetails;

  @Metadata({ data: "json, name=AwsRdsDbSnapshot" })
  awsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  @Metadata({ data: "json, name=AwsRdsEventSubscription" })
  awsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;

  @Metadata({ data: "json, name=AwsRedshiftCluster" })
  awsRedshiftCluster?: AwsRedshiftClusterDetails;

  @Metadata({ data: "json, name=AwsS3AccountPublicAccessBlock" })
  awsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  @Metadata({ data: "json, name=AwsS3Bucket" })
  awsS3Bucket?: AwsS3BucketDetails;

  @Metadata({ data: "json, name=AwsS3Object" })
  awsS3Object?: AwsS3ObjectDetails;

  @Metadata({ data: "json, name=AwsSecretsManagerSecret" })
  awsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  @Metadata({ data: "json, name=AwsSnsTopic" })
  awsSnsTopic?: AwsSnsTopicDetails;

  @Metadata({ data: "json, name=AwsSqsQueue" })
  awsSqsQueue?: AwsSqsQueueDetails;

  @Metadata({ data: "json, name=AwsSsmPatchCompliance" })
  awsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  @Metadata({ data: "json, name=AwsWafWebAcl" })
  awsWafWebAcl?: AwsWafWebAclDetails;

  @Metadata({ data: "json, name=Container" })
  container?: ContainerDetails;

  @Metadata({ data: "json, name=Other" })
  other?: Map<string, string>;
}
