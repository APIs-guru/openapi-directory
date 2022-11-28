import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReadabilityAssessmentRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class ReadabilityAssessmentRequest extends SpeakeasyBase {
    request?: ReadabilityAssessmentRequestBody;
}
export declare class ReadabilityAssessmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
