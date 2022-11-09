import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class KeywordExtractionRequestBody extends SpeakeasyBase {
    apiKey: string;
    n?: number;
    text?: string;
}
export declare class KeywordExtractionRequest extends SpeakeasyBase {
    request?: KeywordExtractionRequestBody;
}
export declare class KeywordExtractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
