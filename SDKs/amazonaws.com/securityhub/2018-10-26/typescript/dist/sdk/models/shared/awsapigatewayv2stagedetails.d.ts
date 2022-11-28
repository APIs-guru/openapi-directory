import { SpeakeasyBase } from "../../../internal/utils";
import { AwsApiGatewayAccessLogSettings } from "./awsapigatewayaccesslogsettings";
import { AwsApiGatewayV2RouteSettings } from "./awsapigatewayv2routesettings";
/**
 * Contains information about a version 2 stage for Amazon API Gateway.
**/
export declare class AwsApiGatewayV2StageDetails extends SpeakeasyBase {
    accessLogSettings?: AwsApiGatewayAccessLogSettings;
    apiGatewayManaged?: boolean;
    autoDeploy?: boolean;
    clientCertificateId?: string;
    createdDate?: string;
    defaultRouteSettings?: AwsApiGatewayV2RouteSettings;
    deploymentId?: string;
    description?: string;
    lastDeploymentStatusMessage?: string;
    lastUpdatedDate?: string;
    routeSettings?: AwsApiGatewayV2RouteSettings;
    stageName?: string;
    stageVariables?: Map<string, string>;
}
