import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";



// BatchUpdateRowsResponse
/** 
 * Response message for TablesService.BatchUpdateRows.
**/
export class BatchUpdateRowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
