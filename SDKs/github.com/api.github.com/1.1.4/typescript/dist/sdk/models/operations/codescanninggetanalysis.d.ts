import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningGetAnalysisPathParams extends SpeakeasyBase {
    analysisId: number;
    owner: string;
    repo: string;
}
export declare class CodeScanningGetAnalysis503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetAnalysisRequest extends SpeakeasyBase {
    pathParams: CodeScanningGetAnalysisPathParams;
}
export declare class CodeScanningGetAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAnalysis?: shared.CodeScanningAnalysis;
    codeScanningGetAnalysis503ApplicationJsonObject?: CodeScanningGetAnalysis503ApplicationJson;
}
