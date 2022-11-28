import { SpeakeasyBase } from "../../../internal/utils";
export declare class CaptionsUploadPayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class CaptionsUploadPayload extends SpeakeasyBase {
    file: CaptionsUploadPayloadFile;
}
