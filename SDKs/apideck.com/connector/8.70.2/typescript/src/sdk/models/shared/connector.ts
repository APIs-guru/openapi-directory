import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorDoc } from "./connectordoc";
import { ConnectorSetting } from "./connectorsetting";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";

export enum ConnectorAuthTypeEnum {
    Oauth2 = "oauth2"
,    ApiKey = "apiKey"
,    Basic = "basic"
,    Custom = "custom"
,    None = "none"
}

export enum ConnectorOauthCredentialsSourceEnum {
    Integration = "integration"
,    Connection = "connection"
}

export enum ConnectorOauthGrantTypeEnum {
    AuthorizationCode = "authorization_code"
,    ClientCredentials = "client_credentials"
}


export class ConnectorOauthScopes extends SpeakeasyBase {
  @Metadata({ data: "json, name=default_apis" })
  defaultApis?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;
}


export class ConnectorSupportedEvents extends SpeakeasyBase {
  @Metadata({ data: "json, name=downstream_event_type" })
  downstreamEventType?: string;

  @Metadata({ data: "json, name=event_type" })
  eventType?: string;

  @Metadata({ data: "json, name=resource_id" })
  resourceId?: string;
}


export class ConnectorSupportedResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @Metadata({ data: "json, name=downstream_name" })
  downstreamName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;
}


export class ConnectorTlsSupport extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// ConnectorUnifiedApisOauthScopes
/** 
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
**/
export class ConnectorUnifiedApisOauthScopes extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;
}


export class ConnectorUnifiedApis extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: UnifiedApiIdEnum;

  @Metadata({ data: "json, name=oauth_scopes", elemType: shared.ConnectorUnifiedApisOauthScopes })
  oauthScopes?: ConnectorUnifiedApisOauthScopes[];
}


export class Connector extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_only" })
  authOnly?: boolean;

  @Metadata({ data: "json, name=auth_type" })
  authType?: ConnectorAuthTypeEnum;

  @Metadata({ data: "json, name=blind_mapped" })
  blindMapped?: boolean;

  @Metadata({ data: "json, name=configurable_resources" })
  configurableResources?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=docs", elemType: shared.ConnectorDoc })
  docs?: ConnectorDoc[];

  @Metadata({ data: "json, name=has_sandbox_credentials" })
  hasSandboxCredentials?: boolean;

  @Metadata({ data: "json, name=icon_url" })
  iconUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oauth_credentials_source" })
  oauthCredentialsSource?: ConnectorOauthCredentialsSourceEnum;

  @Metadata({ data: "json, name=oauth_grant_type" })
  oauthGrantType?: ConnectorOauthGrantTypeEnum;

  @Metadata({ data: "json, name=oauth_scopes", elemType: shared.ConnectorOauthScopes })
  oauthScopes?: ConnectorOauthScopes[];

  @Metadata({ data: "json, name=service_id" })
  serviceId?: string;

  @Metadata({ data: "json, name=settings", elemType: shared.ConnectorSetting })
  settings?: ConnectorSetting[];

  @Metadata({ data: "json, name=status" })
  status?: ConnectorStatusEnum;

  @Metadata({ data: "json, name=supported_events", elemType: shared.ConnectorSupportedEvents })
  supportedEvents?: ConnectorSupportedEvents[];

  @Metadata({ data: "json, name=supported_resources", elemType: shared.ConnectorSupportedResources })
  supportedResources?: ConnectorSupportedResources[];

  @Metadata({ data: "json, name=tls_support" })
  tlsSupport?: ConnectorTlsSupport;

  @Metadata({ data: "json, name=unified_apis", elemType: shared.ConnectorUnifiedApis })
  unifiedApis?: ConnectorUnifiedApis[];

  @Metadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}
