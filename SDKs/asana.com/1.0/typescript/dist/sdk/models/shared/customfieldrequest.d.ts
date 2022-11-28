import { SpeakeasyBase } from "../../../internal/utils";
import { EnumOptionInput } from "./enumoption";
export declare enum CustomFieldRequestCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
export declare enum CustomFieldRequestFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
export declare enum CustomFieldRequestResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare class CustomFieldRequestInput extends SpeakeasyBase {
    currencyCode?: string;
    customLabel?: string;
    customLabelPosition?: CustomFieldRequestCustomLabelPositionEnum;
    description?: string;
    enabled?: boolean;
    enumOptions?: EnumOptionInput[];
    format?: CustomFieldRequestFormatEnum;
    hasNotificationsEnabled?: boolean;
    name?: string;
    numberValue?: number;
    precision?: number;
    resourceSubtype?: CustomFieldRequestResourceSubtypeEnum;
    textValue?: string;
    workspace: string;
}
