import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



// ListTablesResponse
/** 
 * Response message for TablesService.ListTables.
**/
export class ListTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: Table })
  tables?: Table[];
}
