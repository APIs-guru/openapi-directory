import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayV2RouteSettings } from "./awsapigatewayv2routesettings";
import { AwsApiGatewayV2RouteSettings } from "./awsapigatewayv2routesettings";


// AwsApiGatewayV2StageDetails
/** 
 * Contains information about a version 2 stage for Amazon API Gateway.
**/
export class AwsApiGatewayV2StageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: AwsApiGatewayAccessLogSettings;

  @Metadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @Metadata({ data: "json, name=AutoDeploy" })
  autoDeploy?: boolean;

  @Metadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=DefaultRouteSettings" })
  defaultRouteSettings?: AwsApiGatewayV2RouteSettings;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastDeploymentStatusMessage" })
  lastDeploymentStatusMessage?: string;

  @Metadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: string;

  @Metadata({ data: "json, name=RouteSettings" })
  routeSettings?: AwsApiGatewayV2RouteSettings;

  @Metadata({ data: "json, name=StageName" })
  stageName?: string;

  @Metadata({ data: "json, name=StageVariables" })
  stageVariables?: Map<string, string>;
}
