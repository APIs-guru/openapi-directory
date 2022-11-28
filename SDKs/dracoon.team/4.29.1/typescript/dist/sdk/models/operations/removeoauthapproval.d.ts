import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveOAuthApprovalPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class RemoveOAuthApprovalHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveOAuthApprovalRequest extends SpeakeasyBase {
    pathParams: RemoveOAuthApprovalPathParams;
    headers: RemoveOAuthApprovalHeaders;
}
export declare class RemoveOAuthApprovalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
