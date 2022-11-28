import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteUploadSharesRequest
/** 
 * Request model for deleting Upload Shares
**/
export class DeleteUploadSharesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shareIds" })
  shareIds: number[];
}
