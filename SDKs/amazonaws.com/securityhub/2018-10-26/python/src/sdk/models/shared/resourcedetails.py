from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDetails:
    r"""ResourceDetails
    <p>Additional details about a resource related to a finding.</p> <p>To provide the details, use the object that corresponds to the resource type. For example, if the resource type is <code>AwsEc2Instance</code>, then you use the <code>AwsEc2Instance</code> object to provide the details.</p> <p>If the type-specific object does not contain all of the fields you want to populate, then you use the <code>Other</code> object to populate those additional fields.</p> <p>You also use the <code>Other</code> object to populate the details when the selected type does not have a corresponding object.</p>
    """
    
    aws_api_gateway_rest_api: Optional[AwsAPIGatewayRestAPIDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayRestApi') }})
    aws_api_gateway_stage: Optional[AwsAPIGatewayStageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayStage') }})
    aws_api_gateway_v2_api: Optional[AwsAPIGatewayV2APIDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayV2Api') }})
    aws_api_gateway_v2_stage: Optional[AwsAPIGatewayV2StageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiGatewayV2Stage') }})
    aws_auto_scaling_auto_scaling_group: Optional[AwsAutoScalingAutoScalingGroupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAutoScalingAutoScalingGroup') }})
    aws_auto_scaling_launch_configuration: Optional[AwsAutoScalingLaunchConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAutoScalingLaunchConfiguration') }})
    aws_certificate_manager_certificate: Optional[AwsCertificateManagerCertificateDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCertificateManagerCertificate') }})
    aws_cloud_front_distribution: Optional[AwsCloudFrontDistributionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCloudFrontDistribution') }})
    aws_cloud_trail_trail: Optional[AwsCloudTrailTrailDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCloudTrailTrail') }})
    aws_code_build_project: Optional[AwsCodeBuildProjectDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsCodeBuildProject') }})
    aws_dynamo_db_table: Optional[AwsDynamoDbTableDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsDynamoDbTable') }})
    aws_ec2_eip: Optional[AwsEc2EipDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Eip') }})
    aws_ec2_instance: Optional[AwsEc2InstanceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Instance') }})
    aws_ec2_network_acl: Optional[AwsEc2NetworkACLDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkAcl') }})
    aws_ec2_network_interface: Optional[AwsEc2NetworkInterfaceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkInterface') }})
    aws_ec2_security_group: Optional[AwsEc2SecurityGroupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2SecurityGroup') }})
    aws_ec2_subnet: Optional[AwsEc2SubnetDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Subnet') }})
    aws_ec2_volume: Optional[AwsEc2VolumeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Volume') }})
    aws_ec2_vpc: Optional[AwsEc2VpcDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2Vpc') }})
    aws_ec2_vpn_connection: Optional[AwsEc2VpnConnectionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2VpnConnection') }})
    aws_ecr_container_image: Optional[AwsEcrContainerImageDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcrContainerImage') }})
    aws_ecs_cluster: Optional[AwsEcsClusterDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcsCluster') }})
    aws_ecs_service: Optional[AwsEcsServiceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcsService') }})
    aws_ecs_task_definition: Optional[AwsEcsTaskDefinitionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEcsTaskDefinition') }})
    aws_elastic_beanstalk_environment: Optional[AwsElasticBeanstalkEnvironmentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElasticBeanstalkEnvironment') }})
    aws_elasticsearch_domain: Optional[AwsElasticsearchDomainDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElasticsearchDomain') }})
    aws_elb_load_balancer: Optional[AwsElbLoadBalancerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElbLoadBalancer') }})
    aws_elbv2_load_balancer: Optional[AwsElbv2LoadBalancerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsElbv2LoadBalancer') }})
    aws_iam_access_key: Optional[AwsIamAccessKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamAccessKey') }})
    aws_iam_group: Optional[AwsIamGroupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamGroup') }})
    aws_iam_policy: Optional[AwsIamPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamPolicy') }})
    aws_iam_role: Optional[AwsIamRoleDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamRole') }})
    aws_iam_user: Optional[AwsIamUserDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsIamUser') }})
    aws_kms_key: Optional[AwsKmsKeyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKey') }})
    aws_lambda_function: Optional[AwsLambdaFunctionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsLambdaFunction') }})
    aws_lambda_layer_version: Optional[AwsLambdaLayerVersionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsLambdaLayerVersion') }})
    aws_rds_db_cluster: Optional[AwsRdsDbClusterDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbCluster') }})
    aws_rds_db_cluster_snapshot: Optional[AwsRdsDbClusterSnapshotDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbClusterSnapshot') }})
    aws_rds_db_instance: Optional[AwsRdsDbInstanceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbInstance') }})
    aws_rds_db_snapshot: Optional[AwsRdsDbSnapshotDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsDbSnapshot') }})
    aws_rds_event_subscription: Optional[AwsRdsEventSubscriptionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRdsEventSubscription') }})
    aws_redshift_cluster: Optional[AwsRedshiftClusterDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRedshiftCluster') }})
    aws_s3_account_public_access_block: Optional[AwsS3AccountPublicAccessBlockDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsS3AccountPublicAccessBlock') }})
    aws_s3_bucket: Optional[AwsS3BucketDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsS3Bucket') }})
    aws_s3_object: Optional[AwsS3ObjectDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsS3Object') }})
    aws_secrets_manager_secret: Optional[AwsSecretsManagerSecretDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSecretsManagerSecret') }})
    aws_sns_topic: Optional[AwsSnsTopicDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSnsTopic') }})
    aws_sqs_queue: Optional[AwsSqsQueueDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSqsQueue') }})
    aws_ssm_patch_compliance: Optional[AwsSsmPatchComplianceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsSsmPatchCompliance') }})
    aws_waf_web_acl: Optional[AwsWafWebACLDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsWafWebAcl') }})
    container: Optional[ContainerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    other: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Other') }})
    
