import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningUpdateAlertPathParams extends SpeakeasyBase {
    alertNumber: number;
    owner: string;
    repo: string;
}
export declare class CodeScanningUpdateAlertRequestBody extends SpeakeasyBase {
    dismissedReason?: string;
    state: shared.CodeScanningAlertSetStateEnum;
}
export declare class CodeScanningUpdateAlert503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningUpdateAlertRequest extends SpeakeasyBase {
    pathParams: CodeScanningUpdateAlertPathParams;
    request?: CodeScanningUpdateAlertRequestBody;
}
export declare class CodeScanningUpdateAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAlert?: shared.CodeScanningAlert;
    codeScanningUpdateAlert503ApplicationJsonObject?: CodeScanningUpdateAlert503ApplicationJson;
}
