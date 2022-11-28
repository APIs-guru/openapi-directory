import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EstimationCreateAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class EstimationCreateAttachmentApiModel extends SpeakeasyBase {
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: EstimationCreateAttachmentApiModelTypeEnum;
}
