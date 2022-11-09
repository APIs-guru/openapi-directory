import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";


// BatchCreateRowsResponse
/** 
 * Response message for TablesService.BatchCreateRows.
**/
export class BatchCreateRowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
