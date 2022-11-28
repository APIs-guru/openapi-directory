import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class ProductAttachmentApiModel extends SpeakeasyBase {
    id?: number;
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: ProductAttachmentApiModelTypeEnum;
}
