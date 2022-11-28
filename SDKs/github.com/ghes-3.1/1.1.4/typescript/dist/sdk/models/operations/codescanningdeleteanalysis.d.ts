import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningDeleteAnalysisPathParams extends SpeakeasyBase {
    analysisId: number;
    owner: string;
    repo: string;
}
export declare class CodeScanningDeleteAnalysisQueryParams extends SpeakeasyBase {
    confirmDelete?: string;
}
export declare class CodeScanningDeleteAnalysis503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningDeleteAnalysisRequest extends SpeakeasyBase {
    pathParams: CodeScanningDeleteAnalysisPathParams;
    queryParams: CodeScanningDeleteAnalysisQueryParams;
}
export declare class CodeScanningDeleteAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAnalysisDeletion?: shared.CodeScanningAnalysisDeletion;
    codeScanningDeleteAnalysis503ApplicationJsonObject?: CodeScanningDeleteAnalysis503ApplicationJson;
    scimError?: shared.ScimError;
}
