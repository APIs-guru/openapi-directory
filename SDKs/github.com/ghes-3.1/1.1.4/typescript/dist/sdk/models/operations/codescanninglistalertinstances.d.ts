import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningListAlertInstancesPathParams extends SpeakeasyBase {
    alertNumber: number;
    owner: string;
    repo: string;
}
export declare class CodeScanningListAlertInstancesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    ref?: string;
}
export declare class CodeScanningListAlertInstances503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListAlertInstancesRequest extends SpeakeasyBase {
    pathParams: CodeScanningListAlertInstancesPathParams;
    queryParams: CodeScanningListAlertInstancesQueryParams;
}
export declare class CodeScanningListAlertInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAlertInstances?: shared.CodeScanningAlertInstance[];
    codeScanningListAlertInstances503ApplicationJsonObject?: CodeScanningListAlertInstances503ApplicationJson;
}
