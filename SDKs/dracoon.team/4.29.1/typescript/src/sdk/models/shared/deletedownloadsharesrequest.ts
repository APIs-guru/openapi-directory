import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDownloadSharesRequest
/** 
 * Request model for deleting Download Shares
**/
export class DeleteDownloadSharesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=shareIds" })
  shareIds: number[];
}
