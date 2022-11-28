import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfigGrpcServiceDefinition } from "./apigatewayapiconfiggrpcservicedefinition";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
import { ApigatewayApiConfigOpenApiDocument } from "./apigatewayapiconfigopenapidocument";


export enum ApigatewayApiConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Activating = "ACTIVATING"
}


// ApigatewayApiConfigInput
/** 
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
export class ApigatewayApiConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayServiceAccount" })
  gatewayServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=grpcServices", elemType: ApigatewayApiConfigGrpcServiceDefinition })
  grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=managedServiceConfigs", elemType: ApigatewayApiConfigFile })
  managedServiceConfigs?: ApigatewayApiConfigFile[];

  @SpeakeasyMetadata({ data: "json, name=openapiDocuments", elemType: ApigatewayApiConfigOpenApiDocument })
  openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];
}


// ApigatewayApiConfig
/** 
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
export class ApigatewayApiConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayServiceAccount" })
  gatewayServiceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=grpcServices", elemType: ApigatewayApiConfigGrpcServiceDefinition })
  grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=managedServiceConfigs", elemType: ApigatewayApiConfigFile })
  managedServiceConfigs?: ApigatewayApiConfigFile[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openapiDocuments", elemType: ApigatewayApiConfigOpenApiDocument })
  openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ApigatewayApiConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
