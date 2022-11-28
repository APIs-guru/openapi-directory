import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateRowRequest } from "./updaterowrequest";



// BatchUpdateRowsRequest
/** 
 * Request message for TablesService.BatchUpdateRows.
**/
export class BatchUpdateRowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: UpdateRowRequest })
  requests?: UpdateRowRequest[];
}
