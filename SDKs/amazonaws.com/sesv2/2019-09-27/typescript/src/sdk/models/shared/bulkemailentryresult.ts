import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BulkEmailStatusEnum } from "./bulkemailstatusenum";


// BulkEmailEntryResult
/** 
 * The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
**/
export class BulkEmailEntryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=MessageId" })
  messageId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: BulkEmailStatusEnum;
}
