import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateRowRequest } from "./updaterowrequest";


// BatchUpdateRowsRequest
/** 
 * Request message for TablesService.BatchUpdateRows.
**/
export class BatchUpdateRowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.UpdateRowRequest })
  requests?: UpdateRowRequest[];
}
