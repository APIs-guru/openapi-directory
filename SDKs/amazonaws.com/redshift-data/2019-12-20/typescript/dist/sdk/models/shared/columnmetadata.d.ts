import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The properties (metadata) of a column.
**/
export declare class ColumnMetadata extends SpeakeasyBase {
    columnDefault?: string;
    isCaseSensitive?: boolean;
    isCurrency?: boolean;
    isSigned?: boolean;
    label?: string;
    length?: number;
    name?: string;
    nullable?: number;
    precision?: number;
    scale?: number;
    schemaName?: string;
    tableName?: string;
    typeName?: string;
}
