import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class InvoiceAttachmentApiModel extends SpeakeasyBase {
    id?: number;
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: InvoiceAttachmentApiModelTypeEnum;
}
