import { SpeakeasyBase } from "../../../internal/utils";
export declare class SpamDetectionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class SpamDetectionRequest extends SpeakeasyBase {
    request?: SpamDetectionRequestBody;
}
export declare class SpamDetectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
