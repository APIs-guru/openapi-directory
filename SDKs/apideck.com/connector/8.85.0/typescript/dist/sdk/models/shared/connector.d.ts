import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorDoc } from "./connectordoc";
import { ConnectorSetting } from "./connectorsetting";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { ConnectorEvent } from "./connectorevent";
import { LinkedConnectorResource } from "./linkedconnectorresource";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export declare enum ConnectorAuthTypeEnum {
    Oauth2 = "oauth2",
    ApiKey = "apiKey",
    Basic = "basic",
    Custom = "custom",
    None = "none"
}
export declare enum ConnectorOauthCredentialsSourceEnum {
    Integration = "integration",
    Connection = "connection"
}
export declare enum ConnectorOauthGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Password = "password"
}
export declare class ConnectorOauthScopes extends SpeakeasyBase {
    defaultApis?: string[];
    id?: string;
    label?: string;
}
export declare class ConnectorTlsSupport extends SpeakeasyBase {
    description?: string;
    type?: string;
}
/**
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
**/
export declare class ConnectorUnifiedApisOauthScopes extends SpeakeasyBase {
    id?: string;
    label?: string;
}
export declare class ConnectorUnifiedApis extends SpeakeasyBase {
    downstreamUnsupportedResources?: string[];
    id?: UnifiedApiIdEnum;
    name?: string;
    oauthScopes?: ConnectorUnifiedApisOauthScopes[];
    supportedEvents?: ConnectorEvent[];
    supportedResources?: LinkedConnectorResource[];
}
export declare class Connector extends SpeakeasyBase {
    authOnly?: boolean;
    authType?: ConnectorAuthTypeEnum;
    blindMapped?: boolean;
    configurableResources?: string[];
    customScopes?: boolean;
    description?: string;
    docs?: ConnectorDoc[];
    freeTrialAvailable?: boolean;
    hasSandboxCredentials?: boolean;
    iconUrl?: string;
    id?: string;
    logoUrl?: string;
    name?: string;
    oauthCredentialsSource?: ConnectorOauthCredentialsSourceEnum;
    oauthGrantType?: ConnectorOauthGrantTypeEnum;
    oauthScopes?: ConnectorOauthScopes[];
    serviceId?: string;
    settings?: ConnectorSetting[];
    signupUrl?: string;
    status?: ConnectorStatusEnum;
    supportedEvents?: ConnectorEvent[];
    supportedResources?: LinkedConnectorResource[];
    tlsSupport?: ConnectorTlsSupport;
    unifiedApis?: ConnectorUnifiedApis[];
    webhookSupport?: Map<string, any>;
    websiteUrl?: string;
}
