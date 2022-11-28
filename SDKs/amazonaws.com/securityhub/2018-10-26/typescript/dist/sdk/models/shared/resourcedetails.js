var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
var ResourceDetails = /** @class */ (function (_super) {
    __extends(ResourceDetails, _super);
    function ResourceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsApiGatewayRestApi" }),
        __metadata("design:type", AwsApiGatewayRestApiDetails)
    ], ResourceDetails.prototype, "awsApiGatewayRestApi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsApiGatewayStage" }),
        __metadata("design:type", AwsApiGatewayStageDetails)
    ], ResourceDetails.prototype, "awsApiGatewayStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsApiGatewayV2Api" }),
        __metadata("design:type", AwsApiGatewayV2ApiDetails)
    ], ResourceDetails.prototype, "awsApiGatewayV2Api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsApiGatewayV2Stage" }),
        __metadata("design:type", AwsApiGatewayV2StageDetails)
    ], ResourceDetails.prototype, "awsApiGatewayV2Stage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsAutoScalingAutoScalingGroup" }),
        __metadata("design:type", AwsAutoScalingAutoScalingGroupDetails)
    ], ResourceDetails.prototype, "awsAutoScalingAutoScalingGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsAutoScalingLaunchConfiguration" }),
        __metadata("design:type", AwsAutoScalingLaunchConfigurationDetails)
    ], ResourceDetails.prototype, "awsAutoScalingLaunchConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsCertificateManagerCertificate" }),
        __metadata("design:type", AwsCertificateManagerCertificateDetails)
    ], ResourceDetails.prototype, "awsCertificateManagerCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsCloudFrontDistribution" }),
        __metadata("design:type", AwsCloudFrontDistributionDetails)
    ], ResourceDetails.prototype, "awsCloudFrontDistribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsCloudTrailTrail" }),
        __metadata("design:type", AwsCloudTrailTrailDetails)
    ], ResourceDetails.prototype, "awsCloudTrailTrail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsCodeBuildProject" }),
        __metadata("design:type", AwsCodeBuildProjectDetails)
    ], ResourceDetails.prototype, "awsCodeBuildProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsDynamoDbTable" }),
        __metadata("design:type", AwsDynamoDbTableDetails)
    ], ResourceDetails.prototype, "awsDynamoDbTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2Eip" }),
        __metadata("design:type", AwsEc2EipDetails)
    ], ResourceDetails.prototype, "awsEc2Eip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2Instance" }),
        __metadata("design:type", AwsEc2InstanceDetails)
    ], ResourceDetails.prototype, "awsEc2Instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2NetworkAcl" }),
        __metadata("design:type", AwsEc2NetworkAclDetails)
    ], ResourceDetails.prototype, "awsEc2NetworkAcl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2NetworkInterface" }),
        __metadata("design:type", AwsEc2NetworkInterfaceDetails)
    ], ResourceDetails.prototype, "awsEc2NetworkInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2SecurityGroup" }),
        __metadata("design:type", AwsEc2SecurityGroupDetails)
    ], ResourceDetails.prototype, "awsEc2SecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2Subnet" }),
        __metadata("design:type", AwsEc2SubnetDetails)
    ], ResourceDetails.prototype, "awsEc2Subnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2Volume" }),
        __metadata("design:type", AwsEc2VolumeDetails)
    ], ResourceDetails.prototype, "awsEc2Volume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2Vpc" }),
        __metadata("design:type", AwsEc2VpcDetails)
    ], ResourceDetails.prototype, "awsEc2Vpc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEc2VpnConnection" }),
        __metadata("design:type", AwsEc2VpnConnectionDetails)
    ], ResourceDetails.prototype, "awsEc2VpnConnection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEcrContainerImage" }),
        __metadata("design:type", AwsEcrContainerImageDetails)
    ], ResourceDetails.prototype, "awsEcrContainerImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEcsCluster" }),
        __metadata("design:type", AwsEcsClusterDetails)
    ], ResourceDetails.prototype, "awsEcsCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEcsService" }),
        __metadata("design:type", AwsEcsServiceDetails)
    ], ResourceDetails.prototype, "awsEcsService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsEcsTaskDefinition" }),
        __metadata("design:type", AwsEcsTaskDefinitionDetails)
    ], ResourceDetails.prototype, "awsEcsTaskDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsElasticBeanstalkEnvironment" }),
        __metadata("design:type", AwsElasticBeanstalkEnvironmentDetails)
    ], ResourceDetails.prototype, "awsElasticBeanstalkEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsElasticsearchDomain" }),
        __metadata("design:type", AwsElasticsearchDomainDetails)
    ], ResourceDetails.prototype, "awsElasticsearchDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsElbLoadBalancer" }),
        __metadata("design:type", AwsElbLoadBalancerDetails)
    ], ResourceDetails.prototype, "awsElbLoadBalancer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsElbv2LoadBalancer" }),
        __metadata("design:type", AwsElbv2LoadBalancerDetails)
    ], ResourceDetails.prototype, "awsElbv2LoadBalancer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsIamAccessKey" }),
        __metadata("design:type", AwsIamAccessKeyDetails)
    ], ResourceDetails.prototype, "awsIamAccessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsIamGroup" }),
        __metadata("design:type", AwsIamGroupDetails)
    ], ResourceDetails.prototype, "awsIamGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsIamPolicy" }),
        __metadata("design:type", AwsIamPolicyDetails)
    ], ResourceDetails.prototype, "awsIamPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsIamRole" }),
        __metadata("design:type", AwsIamRoleDetails)
    ], ResourceDetails.prototype, "awsIamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsIamUser" }),
        __metadata("design:type", AwsIamUserDetails)
    ], ResourceDetails.prototype, "awsIamUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsKmsKey" }),
        __metadata("design:type", AwsKmsKeyDetails)
    ], ResourceDetails.prototype, "awsKmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsLambdaFunction" }),
        __metadata("design:type", AwsLambdaFunctionDetails)
    ], ResourceDetails.prototype, "awsLambdaFunction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsLambdaLayerVersion" }),
        __metadata("design:type", AwsLambdaLayerVersionDetails)
    ], ResourceDetails.prototype, "awsLambdaLayerVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRdsDbCluster" }),
        __metadata("design:type", AwsRdsDbClusterDetails)
    ], ResourceDetails.prototype, "awsRdsDbCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRdsDbClusterSnapshot" }),
        __metadata("design:type", AwsRdsDbClusterSnapshotDetails)
    ], ResourceDetails.prototype, "awsRdsDbClusterSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRdsDbInstance" }),
        __metadata("design:type", AwsRdsDbInstanceDetails)
    ], ResourceDetails.prototype, "awsRdsDbInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRdsDbSnapshot" }),
        __metadata("design:type", AwsRdsDbSnapshotDetails)
    ], ResourceDetails.prototype, "awsRdsDbSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRdsEventSubscription" }),
        __metadata("design:type", AwsRdsEventSubscriptionDetails)
    ], ResourceDetails.prototype, "awsRdsEventSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRedshiftCluster" }),
        __metadata("design:type", AwsRedshiftClusterDetails)
    ], ResourceDetails.prototype, "awsRedshiftCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsS3AccountPublicAccessBlock" }),
        __metadata("design:type", AwsS3AccountPublicAccessBlockDetails)
    ], ResourceDetails.prototype, "awsS3AccountPublicAccessBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsS3Bucket" }),
        __metadata("design:type", AwsS3BucketDetails)
    ], ResourceDetails.prototype, "awsS3Bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsS3Object" }),
        __metadata("design:type", AwsS3ObjectDetails)
    ], ResourceDetails.prototype, "awsS3Object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsSecretsManagerSecret" }),
        __metadata("design:type", AwsSecretsManagerSecretDetails)
    ], ResourceDetails.prototype, "awsSecretsManagerSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsSnsTopic" }),
        __metadata("design:type", AwsSnsTopicDetails)
    ], ResourceDetails.prototype, "awsSnsTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsSqsQueue" }),
        __metadata("design:type", AwsSqsQueueDetails)
    ], ResourceDetails.prototype, "awsSqsQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsSsmPatchCompliance" }),
        __metadata("design:type", AwsSsmPatchComplianceDetails)
    ], ResourceDetails.prototype, "awsSsmPatchCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsWafWebAcl" }),
        __metadata("design:type", AwsWafWebAclDetails)
    ], ResourceDetails.prototype, "awsWafWebAcl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", ContainerDetails)
    ], ResourceDetails.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Other" }),
        __metadata("design:type", Map)
    ], ResourceDetails.prototype, "other", void 0);
    return ResourceDetails;
}(SpeakeasyBase));
export { ResourceDetails };
