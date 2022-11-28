import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";



// BatchCreateRowsResponse
/** 
 * Response message for TablesService.BatchCreateRows.
**/
export class BatchCreateRowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
