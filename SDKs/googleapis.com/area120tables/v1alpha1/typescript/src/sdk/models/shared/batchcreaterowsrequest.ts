import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateRowRequest } from "./createrowrequest";


// BatchCreateRowsRequest
/** 
 * Request message for TablesService.BatchCreateRows.
**/
export class BatchCreateRowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.CreateRowRequest })
  requests?: CreateRowRequest[];
}
