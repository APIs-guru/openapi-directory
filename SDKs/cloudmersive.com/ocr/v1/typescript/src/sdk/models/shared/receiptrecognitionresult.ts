import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReceiptLineItem } from "./receiptlineitem";



// ReceiptRecognitionResult
/** 
 * Result of recognizing a receipt, to extract the key information from the receipt
**/
export class ReceiptRecognitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressString" })
  addressString?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessWebsite" })
  businessWebsite?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ReceiptItems", elemType: ReceiptLineItem })
  receiptItems?: ReceiptLineItem[];

  @SpeakeasyMetadata({ data: "json, name=ReceiptSubTotal" })
  receiptSubTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=ReceiptTotal" })
  receiptTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
