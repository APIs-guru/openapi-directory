import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1AdvancedApiOpsConfig } from "./googlecloudapigeev1advancedapiopsconfig";
import { GoogleCloudApigeeV1ApiSecurityConfig } from "./googlecloudapigeev1apisecurityconfig";
import { GoogleCloudApigeeV1ConnectorsPlatformConfig } from "./googlecloudapigeev1connectorsplatformconfig";
import { GoogleCloudApigeeV1IntegrationConfig } from "./googlecloudapigeev1integrationconfig";
import { GoogleCloudApigeeV1MonetizationConfig } from "./googlecloudapigeev1monetizationconfig";


// GoogleCloudApigeeV1AddonsConfig
/** 
 * Add-on configurations for the Apigee organization.
**/
export class GoogleCloudApigeeV1AddonsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=advancedApiOpsConfig" })
  advancedApiOpsConfig?: GoogleCloudApigeeV1AdvancedApiOpsConfig;

  @Metadata({ data: "json, name=apiSecurityConfig" })
  apiSecurityConfig?: GoogleCloudApigeeV1ApiSecurityConfig;

  @Metadata({ data: "json, name=connectorsPlatformConfig" })
  connectorsPlatformConfig?: GoogleCloudApigeeV1ConnectorsPlatformConfig;

  @Metadata({ data: "json, name=integrationConfig" })
  integrationConfig?: GoogleCloudApigeeV1IntegrationConfig;

  @Metadata({ data: "json, name=monetizationConfig" })
  monetizationConfig?: GoogleCloudApigeeV1MonetizationConfig;
}
