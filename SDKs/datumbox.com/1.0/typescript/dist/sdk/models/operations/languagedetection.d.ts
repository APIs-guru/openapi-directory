import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class LanguageDetectionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class LanguageDetectionRequest extends SpeakeasyBase {
    request?: LanguageDetectionRequestBody;
}
export declare class LanguageDetectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
