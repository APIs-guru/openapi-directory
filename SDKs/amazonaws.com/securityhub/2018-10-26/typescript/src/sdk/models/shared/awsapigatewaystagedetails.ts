import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayCanarySettings } from "./awsapigatewaycanarysettings";
import { AwsApiGatewayMethodSettings } from "./awsapigatewaymethodsettings";


// AwsApiGatewayStageDetails
/** 
 * Provides information about a version 1 Amazon API Gateway stage.
**/
export class AwsApiGatewayStageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: AwsApiGatewayAccessLogSettings;

  @Metadata({ data: "json, name=CacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @Metadata({ data: "json, name=CacheClusterSize" })
  cacheClusterSize?: string;

  @Metadata({ data: "json, name=CacheClusterStatus" })
  cacheClusterStatus?: string;

  @Metadata({ data: "json, name=CanarySettings" })
  canarySettings?: AwsApiGatewayCanarySettings;

  @Metadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DocumentationVersion" })
  documentationVersion?: string;

  @Metadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: string;

  @Metadata({ data: "json, name=MethodSettings", elemType: shared.AwsApiGatewayMethodSettings })
  methodSettings?: AwsApiGatewayMethodSettings[];

  @Metadata({ data: "json, name=StageName" })
  stageName?: string;

  @Metadata({ data: "json, name=TracingEnabled" })
  tracingEnabled?: boolean;

  @Metadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;

  @Metadata({ data: "json, name=WebAclArn" })
  webAclArn?: string;
}
