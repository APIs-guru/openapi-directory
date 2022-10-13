from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsapigatewayrestapidetails
from . import awsapigatewaystagedetails
from . import awsapigatewayv2apidetails
from . import awsapigatewayv2stagedetails
from . import awsautoscalingautoscalinggroupdetails
from . import awsautoscalinglaunchconfigurationdetails
from . import awscertificatemanagercertificatedetails
from . import awscloudfrontdistributiondetails
from . import awscloudtrailtraildetails
from . import awscodebuildprojectdetails
from . import awsdynamodbtabledetails
from . import awsec2eipdetails
from . import awsec2instancedetails
from . import awsec2networkacldetails
from . import awsec2networkinterfacedetails
from . import awsec2securitygroupdetails
from . import awsec2subnetdetails
from . import awsec2volumedetails
from . import awsec2vpcdetails
from . import awsec2vpnconnectiondetails
from . import awsecrcontainerimagedetails
from . import awsecsclusterdetails
from . import awsecsservicedetails
from . import awsecstaskdefinitiondetails
from . import awselasticbeanstalkenvironmentdetails
from . import awselasticsearchdomaindetails
from . import awselbloadbalancerdetails
from . import awselbv2loadbalancerdetails
from . import awsiamaccesskeydetails
from . import awsiamgroupdetails
from . import awsiampolicydetails
from . import awsiamroledetails
from . import awsiamuserdetails
from . import awskmskeydetails
from . import awslambdafunctiondetails
from . import awslambdalayerversiondetails
from . import awsrdsdbclusterdetails
from . import awsrdsdbclustersnapshotdetails
from . import awsrdsdbinstancedetails
from . import awsrdsdbsnapshotdetails
from . import awsrdseventsubscriptiondetails
from . import awsredshiftclusterdetails
from . import awss3accountpublicaccessblockdetails
from . import awss3bucketdetails
from . import awss3objectdetails
from . import awssecretsmanagersecretdetails
from . import awssnstopicdetails
from . import awssqsqueuedetails
from . import awsssmpatchcompliancedetails
from . import awswafwebacldetails
from . import containerdetails


@dataclass_json
@dataclass
class ResourceDetails:
    aws_api_gateway_rest_api: Optional[awsapigatewayrestapidetails.AwsAPIGatewayRestAPIDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsApiGatewayRestApi' }})
    aws_api_gateway_stage: Optional[awsapigatewaystagedetails.AwsAPIGatewayStageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsApiGatewayStage' }})
    aws_api_gateway_v2_api: Optional[awsapigatewayv2apidetails.AwsAPIGatewayV2APIDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsApiGatewayV2Api' }})
    aws_api_gateway_v2_stage: Optional[awsapigatewayv2stagedetails.AwsAPIGatewayV2StageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsApiGatewayV2Stage' }})
    aws_auto_scaling_auto_scaling_group: Optional[awsautoscalingautoscalinggroupdetails.AwsAutoScalingAutoScalingGroupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsAutoScalingAutoScalingGroup' }})
    aws_auto_scaling_launch_configuration: Optional[awsautoscalinglaunchconfigurationdetails.AwsAutoScalingLaunchConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsAutoScalingLaunchConfiguration' }})
    aws_certificate_manager_certificate: Optional[awscertificatemanagercertificatedetails.AwsCertificateManagerCertificateDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCertificateManagerCertificate' }})
    aws_cloud_front_distribution: Optional[awscloudfrontdistributiondetails.AwsCloudFrontDistributionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCloudFrontDistribution' }})
    aws_cloud_trail_trail: Optional[awscloudtrailtraildetails.AwsCloudTrailTrailDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCloudTrailTrail' }})
    aws_code_build_project: Optional[awscodebuildprojectdetails.AwsCodeBuildProjectDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCodeBuildProject' }})
    aws_dynamo_db_table: Optional[awsdynamodbtabledetails.AwsDynamoDbTableDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsDynamoDbTable' }})
    aws_ec2_eip: Optional[awsec2eipdetails.AwsEc2EipDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2Eip' }})
    aws_ec2_instance: Optional[awsec2instancedetails.AwsEc2InstanceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2Instance' }})
    aws_ec2_network_acl: Optional[awsec2networkacldetails.AwsEc2NetworkACLDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2NetworkAcl' }})
    aws_ec2_network_interface: Optional[awsec2networkinterfacedetails.AwsEc2NetworkInterfaceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2NetworkInterface' }})
    aws_ec2_security_group: Optional[awsec2securitygroupdetails.AwsEc2SecurityGroupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2SecurityGroup' }})
    aws_ec2_subnet: Optional[awsec2subnetdetails.AwsEc2SubnetDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2Subnet' }})
    aws_ec2_volume: Optional[awsec2volumedetails.AwsEc2VolumeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2Volume' }})
    aws_ec2_vpc: Optional[awsec2vpcdetails.AwsEc2VpcDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2Vpc' }})
    aws_ec2_vpn_connection: Optional[awsec2vpnconnectiondetails.AwsEc2VpnConnectionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2VpnConnection' }})
    aws_ecr_container_image: Optional[awsecrcontainerimagedetails.AwsEcrContainerImageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEcrContainerImage' }})
    aws_ecs_cluster: Optional[awsecsclusterdetails.AwsEcsClusterDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEcsCluster' }})
    aws_ecs_service: Optional[awsecsservicedetails.AwsEcsServiceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEcsService' }})
    aws_ecs_task_definition: Optional[awsecstaskdefinitiondetails.AwsEcsTaskDefinitionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEcsTaskDefinition' }})
    aws_elastic_beanstalk_environment: Optional[awselasticbeanstalkenvironmentdetails.AwsElasticBeanstalkEnvironmentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsElasticBeanstalkEnvironment' }})
    aws_elasticsearch_domain: Optional[awselasticsearchdomaindetails.AwsElasticsearchDomainDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsElasticsearchDomain' }})
    aws_elb_load_balancer: Optional[awselbloadbalancerdetails.AwsElbLoadBalancerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsElbLoadBalancer' }})
    aws_elbv2_load_balancer: Optional[awselbv2loadbalancerdetails.AwsElbv2LoadBalancerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsElbv2LoadBalancer' }})
    aws_iam_access_key: Optional[awsiamaccesskeydetails.AwsIamAccessKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsIamAccessKey' }})
    aws_iam_group: Optional[awsiamgroupdetails.AwsIamGroupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsIamGroup' }})
    aws_iam_policy: Optional[awsiampolicydetails.AwsIamPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsIamPolicy' }})
    aws_iam_role: Optional[awsiamroledetails.AwsIamRoleDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsIamRole' }})
    aws_iam_user: Optional[awsiamuserdetails.AwsIamUserDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsIamUser' }})
    aws_kms_key: Optional[awskmskeydetails.AwsKmsKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsKmsKey' }})
    aws_lambda_function: Optional[awslambdafunctiondetails.AwsLambdaFunctionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsLambdaFunction' }})
    aws_lambda_layer_version: Optional[awslambdalayerversiondetails.AwsLambdaLayerVersionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsLambdaLayerVersion' }})
    aws_rds_db_cluster: Optional[awsrdsdbclusterdetails.AwsRdsDbClusterDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRdsDbCluster' }})
    aws_rds_db_cluster_snapshot: Optional[awsrdsdbclustersnapshotdetails.AwsRdsDbClusterSnapshotDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRdsDbClusterSnapshot' }})
    aws_rds_db_instance: Optional[awsrdsdbinstancedetails.AwsRdsDbInstanceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRdsDbInstance' }})
    aws_rds_db_snapshot: Optional[awsrdsdbsnapshotdetails.AwsRdsDbSnapshotDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRdsDbSnapshot' }})
    aws_rds_event_subscription: Optional[awsrdseventsubscriptiondetails.AwsRdsEventSubscriptionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRdsEventSubscription' }})
    aws_redshift_cluster: Optional[awsredshiftclusterdetails.AwsRedshiftClusterDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRedshiftCluster' }})
    aws_s3_account_public_access_block: Optional[awss3accountpublicaccessblockdetails.AwsS3AccountPublicAccessBlockDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsS3AccountPublicAccessBlock' }})
    aws_s3_bucket: Optional[awss3bucketdetails.AwsS3BucketDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsS3Bucket' }})
    aws_s3_object: Optional[awss3objectdetails.AwsS3ObjectDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsS3Object' }})
    aws_secrets_manager_secret: Optional[awssecretsmanagersecretdetails.AwsSecretsManagerSecretDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsSecretsManagerSecret' }})
    aws_sns_topic: Optional[awssnstopicdetails.AwsSnsTopicDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsSnsTopic' }})
    aws_sqs_queue: Optional[awssqsqueuedetails.AwsSqsQueueDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsSqsQueue' }})
    aws_ssm_patch_compliance: Optional[awsssmpatchcompliancedetails.AwsSsmPatchComplianceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsSsmPatchCompliance' }})
    aws_waf_web_acl: Optional[awswafwebacldetails.AwsWafWebACLDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsWafWebAcl' }})
    container: Optional[containerdetails.ContainerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    other: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Other' }})
    
