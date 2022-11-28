import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Optional] The categories attached to this field, used for field-level access control.
**/
export declare class TableFieldSchemaCategories extends SpeakeasyBase {
    names?: string[];
}
export declare class TableFieldSchemaPolicyTags extends SpeakeasyBase {
    names?: string[];
}
export declare class TableFieldSchema extends SpeakeasyBase {
    categories?: TableFieldSchemaCategories;
    collation?: string;
    defaultValueExpression?: string;
    description?: string;
    fields?: TableFieldSchema[];
    maxLength?: string;
    mode?: string;
    name?: string;
    policyTags?: TableFieldSchemaPolicyTags;
    precision?: string;
    scale?: string;
    type?: string;
}
