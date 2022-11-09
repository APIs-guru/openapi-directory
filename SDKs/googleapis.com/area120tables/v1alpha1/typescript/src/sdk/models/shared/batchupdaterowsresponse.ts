import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";


// BatchUpdateRowsResponse
/** 
 * Response message for TablesService.BatchUpdateRows.
**/
export class BatchUpdateRowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
