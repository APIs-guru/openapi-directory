import { SpeakeasyBase } from "../../../internal/utils";
import { TransferMessage } from "./transfermessage";
/**
 * The returned list transfer run messages.
**/
export declare class ListTransferLogsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transferMessages?: TransferMessage[];
}
