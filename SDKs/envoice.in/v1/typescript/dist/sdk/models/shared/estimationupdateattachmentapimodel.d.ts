import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EstimationUpdateAttachmentApiModelTypeEnum {
    External = "External",
    Uploaded = "Uploaded"
}
export declare class EstimationUpdateAttachmentApiModel extends SpeakeasyBase {
    id?: number;
    link?: string;
    obfuscatedFileName?: string;
    originalFileName?: string;
    size?: number;
    type?: EstimationUpdateAttachmentApiModelTypeEnum;
}
