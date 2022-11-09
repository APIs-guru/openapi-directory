import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";


// ListRowsResponse
/** 
 * Response message for TablesService.ListRows.
**/
export class ListRowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
