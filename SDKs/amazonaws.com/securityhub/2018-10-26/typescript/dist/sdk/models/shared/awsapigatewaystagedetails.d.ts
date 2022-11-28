import { SpeakeasyBase } from "../../../internal/utils";
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayCanarySettings } from "./awsapigatewaycanarysettings";
import { AwsApiGatewayMethodSettings } from "./awsapigatewaymethodsettings";
/**
 * Provides information about a version 1 Amazon API Gateway stage.
**/
export declare class AwsApiGatewayStageDetails extends SpeakeasyBase {
    accessLogSettings?: AwsApiGatewayAccessLogSettings;
    cacheClusterEnabled?: boolean;
    cacheClusterSize?: string;
    cacheClusterStatus?: string;
    canarySettings?: AwsApiGatewayCanarySettings;
    clientCertificateId?: string;
    createdDate?: string;
    deploymentId?: string;
    description?: string;
    documentationVersion?: string;
    lastUpdatedDate?: string;
    methodSettings?: AwsApiGatewayMethodSettings[];
    stageName?: string;
    tracingEnabled?: boolean;
    variables?: Map<string, string>;
    webAclArn?: string;
}
