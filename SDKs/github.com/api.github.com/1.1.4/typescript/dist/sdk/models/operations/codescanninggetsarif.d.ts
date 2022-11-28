import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningGetSarifPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    sarifId: string;
}
export declare class CodeScanningGetSarif503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetSarifRequest extends SpeakeasyBase {
    pathParams: CodeScanningGetSarifPathParams;
}
export declare class CodeScanningGetSarifResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningSarifsStatus?: shared.CodeScanningSarifsStatus;
    codeScanningGetSarif503ApplicationJsonObject?: CodeScanningGetSarif503ApplicationJson;
}
