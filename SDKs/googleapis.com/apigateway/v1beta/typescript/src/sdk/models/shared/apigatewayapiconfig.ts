import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayGatewayConfig } from "./apigatewaygatewayconfig";
import { ApigatewayApiConfigGrpcServiceDefinition } from "./apigatewayapiconfiggrpcservicedefinition";
import { ApigatewayApiConfigFile } from "./apigatewayapiconfigfile";
import { ApigatewayApiConfigOpenApiDocument } from "./apigatewayapiconfigopenapidocument";

export enum ApigatewayApiConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
,    Activating = "ACTIVATING"
}


// ApigatewayApiConfig
/** 
 * An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
**/
export class ApigatewayApiConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gatewayConfig" })
  gatewayConfig?: ApigatewayGatewayConfig;

  @Metadata({ data: "json, name=gatewayServiceAccount" })
  gatewayServiceAccount?: string;

  @Metadata({ data: "json, name=grpcServices", elemType: shared.ApigatewayApiConfigGrpcServiceDefinition })
  grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=managedServiceConfigs", elemType: shared.ApigatewayApiConfigFile })
  managedServiceConfigs?: ApigatewayApiConfigFile[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=openapiDocuments", elemType: shared.ApigatewayApiConfigOpenApiDocument })
  openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @Metadata({ data: "json, name=state" })
  state?: ApigatewayApiConfigStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
