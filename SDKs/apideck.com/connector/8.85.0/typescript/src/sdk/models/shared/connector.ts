import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorDoc } from "./connectordoc";
import { ConnectorSetting } from "./connectorsetting";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { ConnectorEvent } from "./connectorevent";
import { LinkedConnectorResource } from "./linkedconnectorresource";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";


export enum ConnectorAuthTypeEnum {
    Oauth2 = "oauth2",
    ApiKey = "apiKey",
    Basic = "basic",
    Custom = "custom",
    None = "none"
}

export enum ConnectorOauthCredentialsSourceEnum {
    Integration = "integration",
    Connection = "connection"
}

export enum ConnectorOauthGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Password = "password"
}


export class ConnectorOauthScopes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_apis" })
  defaultApis?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


export class ConnectorTlsSupport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// ConnectorUnifiedApisOauthScopes
/** 
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
**/
export class ConnectorUnifiedApisOauthScopes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


export class ConnectorUnifiedApis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downstream_unsupported_resources" })
  downstreamUnsupportedResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: UnifiedApiIdEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_scopes", elemType: ConnectorUnifiedApisOauthScopes })
  oauthScopes?: ConnectorUnifiedApisOauthScopes[];

  @SpeakeasyMetadata({ data: "json, name=supported_events", elemType: ConnectorEvent })
  supportedEvents?: ConnectorEvent[];

  @SpeakeasyMetadata({ data: "json, name=supported_resources", elemType: LinkedConnectorResource })
  supportedResources?: LinkedConnectorResource[];
}


export class Connector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_only" })
  authOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: ConnectorAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=blind_mapped" })
  blindMapped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=configurable_resources" })
  configurableResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=custom_scopes" })
  customScopes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=docs", elemType: ConnectorDoc })
  docs?: ConnectorDoc[];

  @SpeakeasyMetadata({ data: "json, name=free_trial_available" })
  freeTrialAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_sandbox_credentials" })
  hasSandboxCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon_url" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_credentials_source" })
  oauthCredentialsSource?: ConnectorOauthCredentialsSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=oauth_grant_type" })
  oauthGrantType?: ConnectorOauthGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=oauth_scopes", elemType: ConnectorOauthScopes })
  oauthScopes?: ConnectorOauthScopes[];

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: ConnectorSetting })
  settings?: ConnectorSetting[];

  @SpeakeasyMetadata({ data: "json, name=signup_url" })
  signupUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectorStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supported_events", elemType: ConnectorEvent })
  supportedEvents?: ConnectorEvent[];

  @SpeakeasyMetadata({ data: "json, name=supported_resources", elemType: LinkedConnectorResource })
  supportedResources?: LinkedConnectorResource[];

  @SpeakeasyMetadata({ data: "json, name=tls_support" })
  tlsSupport?: ConnectorTlsSupport;

  @SpeakeasyMetadata({ data: "json, name=unified_apis", elemType: ConnectorUnifiedApis })
  unifiedApis?: ConnectorUnifiedApis[];

  @SpeakeasyMetadata({ data: "json, name=webhook_support" })
  webhookSupport?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}
