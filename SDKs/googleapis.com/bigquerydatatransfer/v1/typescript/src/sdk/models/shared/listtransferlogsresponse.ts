import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferMessage } from "./transfermessage";



// ListTransferLogsResponse
/** 
 * The returned list transfer run messages.
**/
export class ListTransferLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transferMessages", elemType: TransferMessage })
  transferMessages?: TransferMessage[];
}
