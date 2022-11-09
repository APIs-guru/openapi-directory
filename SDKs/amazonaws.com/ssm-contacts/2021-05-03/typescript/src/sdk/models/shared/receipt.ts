import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReceiptTypeEnum } from "./receipttypeenum";


// Receipt
/** 
 * Records events during an engagement.
**/
export class Receipt extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannelArn" })
  contactChannelArn?: string;

  @Metadata({ data: "json, name=ReceiptInfo" })
  receiptInfo?: string;

  @Metadata({ data: "json, name=ReceiptTime" })
  receiptTime: Date;

  @Metadata({ data: "json, name=ReceiptType" })
  receiptType: ReceiptTypeEnum;
}
