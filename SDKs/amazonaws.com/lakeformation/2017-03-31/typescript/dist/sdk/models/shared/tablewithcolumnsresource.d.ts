import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnWildcard } from "./columnwildcard";
/**
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
**/
export declare class TableWithColumnsResource extends SpeakeasyBase {
    catalogId?: string;
    columnNames?: string[];
    columnWildcard?: ColumnWildcard;
    databaseName: string;
    name: string;
}
