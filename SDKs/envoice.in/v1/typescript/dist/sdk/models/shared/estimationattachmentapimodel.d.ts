import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EstimationAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class EstimationAttachmentApiModel extends SpeakeasyBase {
    id?: number;
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: EstimationAttachmentApiModelTypeEnum;
}
