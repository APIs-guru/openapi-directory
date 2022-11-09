import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateFilesBulkRequest
/** 
 * Request model for updating files
**/
export class UpdateFilesBulkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=objectIds" })
  objectIds: number[];
}
