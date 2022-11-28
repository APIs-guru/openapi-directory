import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningListRecentAnalysesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class CodeScanningListRecentAnalysesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    ref?: string;
    sarifId?: string;
    toolGuid?: string;
    toolName?: string;
}
export declare class CodeScanningListRecentAnalyses503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListRecentAnalysesRequest extends SpeakeasyBase {
    pathParams: CodeScanningListRecentAnalysesPathParams;
    queryParams: CodeScanningListRecentAnalysesQueryParams;
}
export declare class CodeScanningListRecentAnalysesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAnalyses?: shared.CodeScanningAnalysis[];
    codeScanningListRecentAnalyses503ApplicationJsonObject?: CodeScanningListRecentAnalyses503ApplicationJson;
}
