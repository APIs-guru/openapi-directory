import { SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailStatusEnum } from "./bulkemailstatusenum";
/**
 * The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
**/
export declare class BulkEmailEntryResult extends SpeakeasyBase {
    error?: string;
    messageId?: string;
    status?: BulkEmailStatusEnum;
}
