import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveStreamThumbnailUploadPayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class LiveStreamThumbnailUploadPayload extends SpeakeasyBase {
    file: LiveStreamThumbnailUploadPayloadFile;
}
