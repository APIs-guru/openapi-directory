import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DataSourceParameterTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    String = "STRING",
    Integer = "INTEGER",
    Double = "DOUBLE",
    Boolean = "BOOLEAN",
    Record = "RECORD",
    PlusPage = "PLUS_PAGE"
}
/**
 * A parameter used to define custom fields in a data source definition.
**/
export declare class DataSourceParameter extends SpeakeasyBase {
    allowedValues?: string[];
    deprecated?: boolean;
    description?: string;
    displayName?: string;
    fields?: DataSourceParameter[];
    immutable?: boolean;
    maxValue?: number;
    minValue?: number;
    paramId?: string;
    recurse?: boolean;
    repeated?: boolean;
    required?: boolean;
    type?: DataSourceParameterTypeEnum;
    validationDescription?: string;
    validationHelpUrl?: string;
    validationRegex?: string;
}
