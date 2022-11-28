import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnumOption } from "./enumoption";


export enum CustomFieldCompactResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}

export enum CustomFieldCompactTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}


export class CustomFieldCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_value" })
  displayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enum_options", elemType: EnumOption })
  enumOptions?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_value" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: CustomFieldCompactResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=text_value" })
  textValue?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomFieldCompactTypeEnum;
}
