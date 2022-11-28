import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoUploadPayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class VideoUploadPayload extends SpeakeasyBase {
    file: VideoUploadPayloadFile;
}
