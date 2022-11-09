import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDeleteRowsRequest
/** 
 * Request message for TablesService.BatchDeleteRows
**/
export class BatchDeleteRowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}
