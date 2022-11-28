import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// UpdateFilesBulkRequest
/** 
 * Request model for updating files
**/
export class UpdateFilesBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: number;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: number[];
}
