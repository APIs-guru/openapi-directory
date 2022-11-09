import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TwitterSentimentAnalysisRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class TwitterSentimentAnalysisRequest extends SpeakeasyBase {
    request?: TwitterSentimentAnalysisRequestBody;
}
export declare class TwitterSentimentAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
