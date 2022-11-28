import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodeScanningListAlertsInstancesPathParams extends SpeakeasyBase {
    alertNumber: number;
    owner: string;
    repo: string;
}
export declare class CodeScanningListAlertsInstancesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    ref?: string;
}
export declare class CodeScanningListAlertsInstances503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListAlertsInstancesRequest extends SpeakeasyBase {
    pathParams: CodeScanningListAlertsInstancesPathParams;
    queryParams: CodeScanningListAlertsInstancesQueryParams;
}
export declare class CodeScanningListAlertsInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    codeScanningAlertInstances?: shared.CodeScanningAlertInstance[];
    codeScanningListAlertsInstances503ApplicationJsonObject?: CodeScanningListAlertsInstances503ApplicationJson;
}
