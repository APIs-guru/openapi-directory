import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptTypeEnum } from "./receipttypeenum";



// Receipt
/** 
 * Records events during an engagement.
**/
export class Receipt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelArn" })
  contactChannelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReceiptInfo" })
  receiptInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=ReceiptTime" })
  receiptTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ReceiptType" })
  receiptType: ReceiptTypeEnum;
}
