import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SentimentAnalysisRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class SentimentAnalysisRequest extends SpeakeasyBase {
    request?: SentimentAnalysisRequestBody;
}
export declare class SentimentAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
