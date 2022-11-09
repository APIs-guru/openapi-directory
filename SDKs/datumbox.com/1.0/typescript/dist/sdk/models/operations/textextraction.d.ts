import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TextExtractionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class TextExtractionRequest extends SpeakeasyBase {
    request?: TextExtractionRequestBody;
}
export declare class TextExtractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
