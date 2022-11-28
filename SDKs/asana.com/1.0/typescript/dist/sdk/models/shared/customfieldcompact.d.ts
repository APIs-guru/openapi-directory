import { SpeakeasyBase } from "../../../internal/utils";
import { EnumOption } from "./enumoption";
export declare enum CustomFieldCompactResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare enum CustomFieldCompactTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare class CustomFieldCompact extends SpeakeasyBase {
    displayValue?: string;
    enabled?: boolean;
    enumOptions?: EnumOption[];
    gid?: string;
    name?: string;
    numberValue?: number;
    resourceSubtype?: CustomFieldCompactResourceSubtypeEnum;
    resourceType?: string;
    textValue?: string;
    type?: CustomFieldCompactTypeEnum;
}
