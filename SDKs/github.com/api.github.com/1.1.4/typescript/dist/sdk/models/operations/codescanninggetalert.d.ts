import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningGetAlertPathParams extends SpeakeasyBase {
    alertNumber: number;
    owner: string;
    repo: string;
}
export declare class CodeScanningGetAlert503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetAlertRequest extends SpeakeasyBase {
    pathParams: CodeScanningGetAlertPathParams;
}
export declare class CodeScanningGetAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAlert?: shared.CodeScanningAlert;
    codeScanningGetAlert503ApplicationJsonObject?: CodeScanningGetAlert503ApplicationJson;
}
