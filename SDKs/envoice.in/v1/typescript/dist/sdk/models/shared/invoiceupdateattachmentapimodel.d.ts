import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceUpdateAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class InvoiceUpdateAttachmentApiModel extends SpeakeasyBase {
    id?: number;
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: InvoiceUpdateAttachmentApiModelTypeEnum;
}
