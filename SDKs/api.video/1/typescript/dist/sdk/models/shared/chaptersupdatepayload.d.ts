import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChaptersUpdatePayloadFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ChaptersUpdatePayload extends SpeakeasyBase {
    file: ChaptersUpdatePayloadFile;
}
