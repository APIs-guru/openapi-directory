import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoThumbnailUploadPayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class VideoThumbnailUploadPayload extends SpeakeasyBase {
    file: VideoThumbnailUploadPayloadFile;
}
