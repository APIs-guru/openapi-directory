import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrderAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class OrderAttachmentApiModel extends SpeakeasyBase {
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: OrderAttachmentApiModelTypeEnum;
}
