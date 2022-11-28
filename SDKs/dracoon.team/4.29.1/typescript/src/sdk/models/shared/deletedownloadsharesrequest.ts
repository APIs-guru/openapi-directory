import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDownloadSharesRequest
/** 
 * Request model for deleting Download Shares
**/
export class DeleteDownloadSharesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shareIds" })
  shareIds: number[];
}
