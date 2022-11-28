import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the metadata for a column.
**/
export declare class ColumnMetadata extends SpeakeasyBase {
    arrayBaseColumnType?: number;
    isAutoIncrement?: boolean;
    isCaseSensitive?: boolean;
    isCurrency?: boolean;
    isSigned?: boolean;
    label?: string;
    name?: string;
    nullable?: number;
    precision?: number;
    scale?: number;
    schemaName?: string;
    tableName?: string;
    type?: number;
    typeName?: string;
}
