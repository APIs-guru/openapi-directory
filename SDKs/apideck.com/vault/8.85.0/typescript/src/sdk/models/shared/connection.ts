import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { SimpleFormFieldOption } from "./simpleformfieldoption";
import { FormFieldOptionGroup } from "./formfieldoptiongroup";
import { FormField } from "./formfield";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";
import { WebhookSubscription } from "./webhooksubscription";


export enum ConnectionConfigurationDefaultsTargetEnum {
    CustomFields = "custom_fields",
    Resource = "resource"
}


export class ConnectionConfigurationDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: any[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: ConnectionConfigurationDefaultsTargetEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}


export class ConnectionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaults", elemType: ConnectionConfigurationDefaults })
  defaults?: ConnectionConfigurationDefaults[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}

export enum ConnectionStatusEnum {
    Live = "live",
    Upcoming = "upcoming",
    Requested = "requested"
}


export class ConnectionConfigurationDefaultsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: any[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}


export class ConnectionConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaults", elemType: ConnectionConfigurationDefaultsInput })
  defaults?: ConnectionConfigurationDefaultsInput[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: AuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authorize_url" })
  authorizeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=configurable_resources" })
  configurableResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=configuration", elemType: ConnectionConfiguration })
  configuration?: ConnectionConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=form_fields", elemType: FormField })
  formFields?: FormField[];

  @SpeakeasyMetadata({ data: "json, name=has_guide" })
  hasGuide?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_grant_type" })
  oauthGrantType?: OAuthGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_schema_support" })
  resourceSchemaSupport?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_settings_support" })
  resourceSettingsSupport?: string[];

  @SpeakeasyMetadata({ data: "json, name=revoke_url" })
  revokeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=settings_required_for_authorization" })
  settingsRequiredForAuthorization?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: WebhookSubscription })
  subscriptions?: WebhookSubscription[];

  @SpeakeasyMetadata({ data: "json, name=tag_line" })
  tagLine?: string;

  @SpeakeasyMetadata({ data: "json, name=unified_api" })
  unifiedApi?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}


export class ConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration", elemType: ConnectionConfigurationInput })
  configuration?: ConnectionConfigurationInput[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Map<string, any>;
}
