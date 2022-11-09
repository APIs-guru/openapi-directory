import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SubjectivityAnalysisRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class SubjectivityAnalysisRequest extends SpeakeasyBase {
    request?: SubjectivityAnalysisRequestBody;
}
export declare class SubjectivityAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
