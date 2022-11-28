import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningUploadSarifPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class CodeScanningUploadSarifRequestBody extends SpeakeasyBase {
    checkoutUri?: string;
    commitSha: string;
    ref: string;
    sarif: string;
    startedAt?: Date;
    toolName?: string;
}
export declare class CodeScanningUploadSarif503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningUploadSarifRequest extends SpeakeasyBase {
    pathParams: CodeScanningUploadSarifPathParams;
    request?: CodeScanningUploadSarifRequestBody;
}
export declare class CodeScanningUploadSarifResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningSarifsReceipt?: shared.CodeScanningSarifsReceipt;
    codeScanningUploadSarif503ApplicationJsonObject?: CodeScanningUploadSarif503ApplicationJson;
}
