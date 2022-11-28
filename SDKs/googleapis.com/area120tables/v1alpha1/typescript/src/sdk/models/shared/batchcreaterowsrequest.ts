import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateRowRequest } from "./createrowrequest";



// BatchCreateRowsRequest
/** 
 * Request message for TablesService.BatchCreateRows.
**/
export class BatchCreateRowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: CreateRowRequest })
  requests?: CreateRowRequest[];
}
