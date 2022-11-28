import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfigGrpcServiceDefinition } from "./apigatewayapiconfiggrpcservicedefinition";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
import { ApigatewayApiConfigOpenApiDocument } from "./apigatewayapiconfigopenapidocument";
export declare enum ApigatewayApiConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Activating = "ACTIVATING"
}
/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
export declare class ApigatewayApiConfigInput extends SpeakeasyBase {
    displayName?: string;
    gatewayServiceAccount?: string;
    grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];
    labels?: Map<string, string>;
    managedServiceConfigs?: ApigatewayApiConfigFile[];
    openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];
}
/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
export declare class ApigatewayApiConfig extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    gatewayServiceAccount?: string;
    grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];
    labels?: Map<string, string>;
    managedServiceConfigs?: ApigatewayApiConfigFile[];
    name?: string;
    openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];
    serviceConfigId?: string;
    state?: ApigatewayApiConfigStateEnum;
    updateTime?: string;
}
