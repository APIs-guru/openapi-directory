import { SpeakeasyBase } from "../../../internal/utils";
export declare class TokenUploadPayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class TokenUploadPayload extends SpeakeasyBase {
    file: TokenUploadPayloadFile;
    videoId?: string;
}
