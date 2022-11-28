import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceCreateAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class InvoiceCreateAttachmentApiModel extends SpeakeasyBase {
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: InvoiceCreateAttachmentApiModelTypeEnum;
}
