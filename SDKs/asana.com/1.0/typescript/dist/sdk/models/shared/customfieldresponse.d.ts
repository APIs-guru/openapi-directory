import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";
export declare enum CustomFieldResponseCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
export declare class CustomFieldResponseEnumValue extends SpeakeasyBase {
    color?: string;
    enabled?: boolean;
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum CustomFieldResponseFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
export declare enum CustomFieldResponseResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare enum CustomFieldResponseTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare class CustomFieldResponse extends SpeakeasyBase {
    createdBy?: UserCompact;
    currencyCode?: string;
    customLabel?: string;
    customLabelPosition?: CustomFieldResponseCustomLabelPositionEnum;
    description?: string;
    displayValue?: string;
    enabled?: boolean;
    enumOptions?: EnumOption[];
    enumValue?: CustomFieldResponseEnumValue;
    format?: CustomFieldResponseFormatEnum;
    gid?: string;
    hasNotificationsEnabled?: boolean;
    isGlobalToWorkspace?: boolean;
    multiEnumValues?: EnumOption[];
    name?: string;
    numberValue?: number;
    precision?: number;
    resourceSubtype?: CustomFieldResponseResourceSubtypeEnum;
    resourceType?: string;
    textValue?: string;
    type?: CustomFieldResponseTypeEnum;
}
