import { SpeakeasyBase } from "../../../internal/utils";
import { BytesRange } from "./bytesrange";
export declare enum VideostatusIngestStatusEnum {
    Missing = "missing",
    Uploading = "uploading",
    Uploaded = "uploaded"
}
/**
 * Details about the capturing, transferring, and storing of your video for use immediately or in the future.
**/
export declare class VideostatusIngest extends SpeakeasyBase {
    filesize?: number;
    receivedBytes?: BytesRange[];
    status?: VideostatusIngestStatusEnum;
}
