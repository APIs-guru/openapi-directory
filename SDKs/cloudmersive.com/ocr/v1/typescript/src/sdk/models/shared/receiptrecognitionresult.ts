import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReceiptLineItem } from "./receiptlineitem";


// ReceiptRecognitionResult
/** 
 * Result of recognizing a receipt, to extract the key information from the receipt
**/
export class ReceiptRecognitionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressString" })
  addressString?: string;

  @Metadata({ data: "json, name=BusinessName" })
  businessName?: string;

  @Metadata({ data: "json, name=BusinessWebsite" })
  businessWebsite?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=ReceiptItems", elemType: shared.ReceiptLineItem })
  receiptItems?: ReceiptLineItem[];

  @Metadata({ data: "json, name=ReceiptSubTotal" })
  receiptSubTotal?: number;

  @Metadata({ data: "json, name=ReceiptTotal" })
  receiptTotal?: number;

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
