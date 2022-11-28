import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1AdvancedApiOpsConfig } from "./googlecloudapigeev1advancedapiopsconfig";
import { GoogleCloudApigeeV1ApiSecurityConfigInput } from "./googlecloudapigeev1apisecurityconfig";
import { GoogleCloudApigeeV1ConnectorsPlatformConfigInput } from "./googlecloudapigeev1connectorsplatformconfig";
import { GoogleCloudApigeeV1IntegrationConfig } from "./googlecloudapigeev1integrationconfig";
import { GoogleCloudApigeeV1MonetizationConfig } from "./googlecloudapigeev1monetizationconfig";
/**
 * Add-on configurations for the Apigee organization.
**/
export declare class GoogleCloudApigeeV1AddonsConfigInput extends SpeakeasyBase {
    advancedApiOpsConfig?: GoogleCloudApigeeV1AdvancedApiOpsConfig;
    apiSecurityConfig?: GoogleCloudApigeeV1ApiSecurityConfigInput;
    connectorsPlatformConfig?: GoogleCloudApigeeV1ConnectorsPlatformConfigInput;
    integrationConfig?: GoogleCloudApigeeV1IntegrationConfig;
    monetizationConfig?: GoogleCloudApigeeV1MonetizationConfig;
}
