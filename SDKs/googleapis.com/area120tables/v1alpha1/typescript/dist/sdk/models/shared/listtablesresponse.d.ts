import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Table } from "./table";
/**
 * Response message for TablesService.ListTables.
**/
export declare class ListTablesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tables?: Table[];
}
