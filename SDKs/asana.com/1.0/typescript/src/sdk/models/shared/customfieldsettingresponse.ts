import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";


export enum CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}


export class CustomFieldSettingResponseCustomFieldEnumValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum CustomFieldSettingResponseCustomFieldFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}

export enum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}

export enum CustomFieldSettingResponseCustomFieldTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}


export class CustomFieldSettingResponseCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label" })
  customLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label_position" })
  customLabelPosition?: CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_value" })
  displayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enum_options", elemType: EnumOption })
  enumOptions?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=enum_value" })
  enumValue?: CustomFieldSettingResponseCustomFieldEnumValue;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CustomFieldSettingResponseCustomFieldFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=has_notifications_enabled" })
  hasNotificationsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_global_to_workspace" })
  isGlobalToWorkspace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multi_enum_values", elemType: EnumOption })
  multiEnumValues?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_value" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldSettingResponseCustomFieldResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=text_value" })
  textValue?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomFieldSettingResponseCustomFieldTypeEnum;
}


export class CustomFieldSettingResponseParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class CustomFieldSettingResponseProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class CustomFieldSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField?: CustomFieldSettingResponseCustomField;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=is_important" })
  isImportant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: CustomFieldSettingResponseParent;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: CustomFieldSettingResponseProject;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
