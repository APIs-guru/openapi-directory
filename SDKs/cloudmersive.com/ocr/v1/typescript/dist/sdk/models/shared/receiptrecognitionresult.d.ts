import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReceiptLineItem } from "./receiptlineitem";
/**
 * Result of recognizing a receipt, to extract the key information from the receipt
**/
export declare class ReceiptRecognitionResult extends SpeakeasyBase {
    addressString?: string;
    businessName?: string;
    businessWebsite?: string;
    phoneNumber?: string;
    receiptItems?: ReceiptLineItem[];
    receiptSubTotal?: number;
    receiptTotal?: number;
    successful?: boolean;
    timestamp?: Date;
}
