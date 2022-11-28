import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";



// ListRowsResponse
/** 
 * Response message for TablesService.ListRows.
**/
export class ListRowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
