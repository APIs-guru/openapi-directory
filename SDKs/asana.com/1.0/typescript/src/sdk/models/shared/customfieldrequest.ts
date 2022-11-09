import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnumOption } from "./enumoption";

export enum CustomFieldRequestCustomLabelPositionEnum {
    Prefix = "prefix"
,    Suffix = "suffix"
}

export enum CustomFieldRequestFormatEnum {
    Currency = "currency"
,    Identifier = "identifier"
,    Percentage = "percentage"
,    Custom = "custom"
,    None = "none"
}

export enum CustomFieldRequestResourceSubtypeEnum {
    Text = "text"
,    Enum = "enum"
,    MultiEnum = "multi_enum"
,    Number = "number"
}

export enum CustomFieldRequestTypeEnum {
    Text = "text"
,    Enum = "enum"
,    MultiEnum = "multi_enum"
,    Number = "number"
}


export class CustomFieldRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=custom_label" })
  customLabel?: string;

  @Metadata({ data: "json, name=custom_label_position" })
  customLabelPosition?: CustomFieldRequestCustomLabelPositionEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_value" })
  displayValue?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=enum_options", elemType: shared.EnumOption })
  enumOptions?: EnumOption[];

  @Metadata({ data: "json, name=format" })
  format?: CustomFieldRequestFormatEnum;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=has_notifications_enabled" })
  hasNotificationsEnabled?: boolean;

  @Metadata({ data: "json, name=is_global_to_workspace" })
  isGlobalToWorkspace?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number_value" })
  numberValue?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldRequestResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=text_value" })
  textValue?: string;

  @Metadata({ data: "json, name=type" })
  type?: CustomFieldRequestTypeEnum;

  @Metadata({ data: "json, name=workspace" })
  workspace: string;
}
