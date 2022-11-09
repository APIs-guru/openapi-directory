import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthTypeEnum } from "./authtypeenum";
import { SimpleFormFieldOption } from "./simpleformfieldoption";
import { FormFieldOptionGroup } from "./formfieldoptiongroup";
import { FormField } from "./formfield";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";

export enum ConnectionConfigurationDefaultsTargetEnum {
    CustomFields = "custom_fields"
,    Resource = "resource"
}


export class ConnectionConfigurationDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=options" })
  options?: any[];

  @Metadata({ data: "json, name=target" })
  target?: ConnectionConfigurationDefaultsTargetEnum;

  @Metadata({ data: "json, name=value" })
  value?: any;
}


export class ConnectionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaults", elemType: shared.ConnectionConfigurationDefaults })
  defaults?: ConnectionConfigurationDefaults[];

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}

export enum ConnectionStatusEnum {
    Live = "live"
,    Upcoming = "upcoming"
,    Requested = "requested"
}


export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_type" })
  authType?: AuthTypeEnum;

  @Metadata({ data: "json, name=authorize_url" })
  authorizeUrl?: string;

  @Metadata({ data: "json, name=configurable_resources" })
  configurableResources?: string[];

  @Metadata({ data: "json, name=configuration", elemType: shared.ConnectionConfiguration })
  configuration?: ConnectionConfiguration[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=form_fields", elemType: shared.FormField })
  formFields?: FormField[];

  @Metadata({ data: "json, name=has_guide" })
  hasGuide?: boolean;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oauth_grant_type" })
  oauthGrantType?: OAuthGrantTypeEnum;

  @Metadata({ data: "json, name=resource_schema_support" })
  resourceSchemaSupport?: string[];

  @Metadata({ data: "json, name=resource_settings_support" })
  resourceSettingsSupport?: string[];

  @Metadata({ data: "json, name=revoke_url" })
  revokeUrl?: string;

  @Metadata({ data: "json, name=service_id" })
  serviceId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: Map<string, any>;

  @Metadata({ data: "json, name=settings_required_for_authorization" })
  settingsRequiredForAuthorization?: string[];

  @Metadata({ data: "json, name=state" })
  state?: ConnectionStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: ConnectionStatusEnum;

  @Metadata({ data: "json, name=tag_line" })
  tagLine?: string;

  @Metadata({ data: "json, name=unified_api" })
  unifiedApi?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
