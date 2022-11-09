import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteUploadSharesRequest
/** 
 * Request model for deleting Upload Shares
**/
export class DeleteUploadSharesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=shareIds" })
  shareIds: number[];
}
