import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";


export enum CustomFieldResponseCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}


export class CustomFieldResponseEnumValue extends SpeakeasyBase {
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

export enum CustomFieldResponseFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}

export enum CustomFieldResponseResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}

export enum CustomFieldResponseTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}


export class CustomFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label" })
  customLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_label_position" })
  customLabelPosition?: CustomFieldResponseCustomLabelPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_value" })
  displayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enum_options", elemType: EnumOption })
  enumOptions?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=enum_value" })
  enumValue?: CustomFieldResponseEnumValue;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CustomFieldResponseFormatEnum;

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
  resourceSubtype?: CustomFieldResponseResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=text_value" })
  textValue?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomFieldResponseTypeEnum;
}
