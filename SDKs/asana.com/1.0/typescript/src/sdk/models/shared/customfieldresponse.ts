import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";
import { EnumOption } from "./enumoption";

export enum CustomFieldResponseCustomLabelPositionEnum {
    Prefix = "prefix"
,    Suffix = "suffix"
}


export class CustomFieldResponseEnumValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum CustomFieldResponseFormatEnum {
    Currency = "currency"
,    Identifier = "identifier"
,    Percentage = "percentage"
,    Custom = "custom"
,    None = "none"
}

export enum CustomFieldResponseResourceSubtypeEnum {
    Text = "text"
,    Enum = "enum"
,    MultiEnum = "multi_enum"
,    Number = "number"
}

export enum CustomFieldResponseTypeEnum {
    Text = "text"
,    Enum = "enum"
,    MultiEnum = "multi_enum"
,    Number = "number"
}


export class CustomFieldResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=custom_label" })
  customLabel?: string;

  @Metadata({ data: "json, name=custom_label_position" })
  customLabelPosition?: CustomFieldResponseCustomLabelPositionEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_value" })
  displayValue?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=enum_options", elemType: shared.EnumOption })
  enumOptions?: EnumOption[];

  @Metadata({ data: "json, name=enum_value" })
  enumValue?: CustomFieldResponseEnumValue;

  @Metadata({ data: "json, name=format" })
  format?: CustomFieldResponseFormatEnum;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=has_notifications_enabled" })
  hasNotificationsEnabled?: boolean;

  @Metadata({ data: "json, name=is_global_to_workspace" })
  isGlobalToWorkspace?: boolean;

  @Metadata({ data: "json, name=multi_enum_values", elemType: shared.EnumOption })
  multiEnumValues?: EnumOption[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number_value" })
  numberValue?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldResponseResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=text_value" })
  textValue?: string;

  @Metadata({ data: "json, name=type" })
  type?: CustomFieldResponseTypeEnum;
}
