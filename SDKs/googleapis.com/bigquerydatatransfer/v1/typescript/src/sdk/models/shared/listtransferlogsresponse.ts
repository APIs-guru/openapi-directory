import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransferMessage } from "./transfermessage";


// ListTransferLogsResponse
/** 
 * The returned list transfer run messages.
**/
export class ListTransferLogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transferMessages", elemType: shared.TransferMessage })
  transferMessages?: TransferMessage[];
}
