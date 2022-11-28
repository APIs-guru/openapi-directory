import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { EnumOption } from "./enumoption";
export declare enum CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
export declare class CustomFieldSettingResponseCustomFieldEnumValue extends SpeakeasyBase {
    color?: string;
    enabled?: boolean;
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum CustomFieldSettingResponseCustomFieldFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
export declare enum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare enum CustomFieldSettingResponseCustomFieldTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
export declare class CustomFieldSettingResponseCustomField extends SpeakeasyBase {
    createdBy?: UserCompact;
    currencyCode?: string;
    customLabel?: string;
    customLabelPosition?: CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum;
    description?: string;
    displayValue?: string;
    enabled?: boolean;
    enumOptions?: EnumOption[];
    enumValue?: CustomFieldSettingResponseCustomFieldEnumValue;
    format?: CustomFieldSettingResponseCustomFieldFormatEnum;
    gid?: string;
    hasNotificationsEnabled?: boolean;
    isGlobalToWorkspace?: boolean;
    multiEnumValues?: EnumOption[];
    name?: string;
    numberValue?: number;
    precision?: number;
    resourceSubtype?: CustomFieldSettingResponseCustomFieldResourceSubtypeEnum;
    resourceType?: string;
    textValue?: string;
    type?: CustomFieldSettingResponseCustomFieldTypeEnum;
}
export declare class CustomFieldSettingResponseParent extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class CustomFieldSettingResponseProject extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class CustomFieldSettingResponse extends SpeakeasyBase {
    customField?: CustomFieldSettingResponseCustomField;
    gid?: string;
    isImportant?: boolean;
    parent?: CustomFieldSettingResponseParent;
    project?: CustomFieldSettingResponseProject;
    resourceType?: string;
}
