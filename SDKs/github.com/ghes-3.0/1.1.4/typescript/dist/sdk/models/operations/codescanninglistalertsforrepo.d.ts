import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningListAlertsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class CodeScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    ref?: string;
    state?: shared.CodeScanningAlertStateEnum;
    toolGuid?: string;
    toolName?: string;
}
export declare class CodeScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListAlertsForRepoRequest extends SpeakeasyBase {
    pathParams: CodeScanningListAlertsForRepoPathParams;
    queryParams: CodeScanningListAlertsForRepoQueryParams;
}
export declare class CodeScanningListAlertsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAlertItems?: shared.CodeScanningAlertItems[];
    codeScanningListAlertsForRepo503ApplicationJsonObject?: CodeScanningListAlertsForRepo503ApplicationJson;
}
