import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1AdvancedApiOpsConfig } from "./googlecloudapigeev1advancedapiopsconfig";
import { GoogleCloudApigeeV1ApiSecurityConfigInput } from "./googlecloudapigeev1apisecurityconfig";
import { GoogleCloudApigeeV1ConnectorsPlatformConfigInput } from "./googlecloudapigeev1connectorsplatformconfig";
import { GoogleCloudApigeeV1IntegrationConfig } from "./googlecloudapigeev1integrationconfig";
import { GoogleCloudApigeeV1MonetizationConfig } from "./googlecloudapigeev1monetizationconfig";



// GoogleCloudApigeeV1AddonsConfigInput
/** 
 * Add-on configurations for the Apigee organization.
**/
export class GoogleCloudApigeeV1AddonsConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advancedApiOpsConfig" })
  advancedApiOpsConfig?: GoogleCloudApigeeV1AdvancedApiOpsConfig;

  @SpeakeasyMetadata({ data: "json, name=apiSecurityConfig" })
  apiSecurityConfig?: GoogleCloudApigeeV1ApiSecurityConfigInput;

  @SpeakeasyMetadata({ data: "json, name=connectorsPlatformConfig" })
  connectorsPlatformConfig?: GoogleCloudApigeeV1ConnectorsPlatformConfigInput;

  @SpeakeasyMetadata({ data: "json, name=integrationConfig" })
  integrationConfig?: GoogleCloudApigeeV1IntegrationConfig;

  @SpeakeasyMetadata({ data: "json, name=monetizationConfig" })
  monetizationConfig?: GoogleCloudApigeeV1MonetizationConfig;
}
