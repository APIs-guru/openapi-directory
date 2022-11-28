import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailStatusEnum } from "./bulkemailstatusenum";



// BulkEmailEntryResult
/** 
 * The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
**/
export class BulkEmailEntryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=MessageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: BulkEmailStatusEnum;
}
