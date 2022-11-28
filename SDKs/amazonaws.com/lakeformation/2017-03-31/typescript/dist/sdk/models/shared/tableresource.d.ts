import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
**/
export declare class TableResource extends SpeakeasyBase {
    catalogId?: string;
    databaseName: string;
    name?: string;
    tableWildcard?: Map<string, any>;
}
