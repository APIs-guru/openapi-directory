import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnumOption } from "./enumoption";

export enum CustomFieldCompactResourceSubtypeEnum {
    Text = "text"
,    Enum = "enum"
,    MultiEnum = "multi_enum"
,    Number = "number"
}

export enum CustomFieldCompactTypeEnum {
    Text = "text"
,    Enum = "enum"
,    MultiEnum = "multi_enum"
,    Number = "number"
}


export class CustomFieldCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_value" })
  displayValue?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=enum_options", elemType: shared.EnumOption })
  enumOptions?: EnumOption[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number_value" })
  numberValue?: number;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldCompactResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=text_value" })
  textValue?: string;

  @Metadata({ data: "json, name=type" })
  type?: CustomFieldCompactTypeEnum;
}
