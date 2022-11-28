import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayCanarySettings } from "./awsapigatewaycanarysettings";
import { AwsApiGatewayMethodSettings } from "./awsapigatewaymethodsettings";



// AwsApiGatewayStageDetails
/** 
 * Provides information about a version 1 Amazon API Gateway stage.
**/
export class AwsApiGatewayStageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: AwsApiGatewayAccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=CacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CacheClusterSize" })
  cacheClusterSize?: string;

  @SpeakeasyMetadata({ data: "json, name=CacheClusterStatus" })
  cacheClusterStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=CanarySettings" })
  canarySettings?: AwsApiGatewayCanarySettings;

  @SpeakeasyMetadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentationVersion" })
  documentationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=MethodSettings", elemType: AwsApiGatewayMethodSettings })
  methodSettings?: AwsApiGatewayMethodSettings[];

  @SpeakeasyMetadata({ data: "json, name=StageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=TracingEnabled" })
  tracingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=WebAclArn" })
  webAclArn?: string;
}
