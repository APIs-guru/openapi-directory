import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceAttachmentTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class InvoiceAttachment extends SpeakeasyBase {
    id?: number;
    invoiceId?: number;
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: InvoiceAttachmentTypeEnum;
}
