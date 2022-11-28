import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDeleteRowsRequest
/** 
 * Request message for TablesService.BatchDeleteRows
**/
export class BatchDeleteRowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}
