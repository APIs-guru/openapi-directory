import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayV2RouteSettings } from "./awsapigatewayv2routesettings";



// AwsApiGatewayV2StageDetails
/** 
 * Contains information about a version 2 stage for Amazon API Gateway.
**/
export class AwsApiGatewayV2StageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: AwsApiGatewayAccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoDeploy" })
  autoDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultRouteSettings" })
  defaultRouteSettings?: AwsApiGatewayV2RouteSettings;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastDeploymentStatusMessage" })
  lastDeploymentStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteSettings" })
  routeSettings?: AwsApiGatewayV2RouteSettings;

  @SpeakeasyMetadata({ data: "json, name=StageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=StageVariables" })
  stageVariables?: Map<string, string>;
}
