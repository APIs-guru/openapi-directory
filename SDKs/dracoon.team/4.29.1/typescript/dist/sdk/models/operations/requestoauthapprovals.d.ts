import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOAuthApprovalsQueryParams extends SpeakeasyBase {
    sort?: string;
}
export declare class RequestOAuthApprovalsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestOAuthApprovalsRequest extends SpeakeasyBase {
    queryParams: RequestOAuthApprovalsQueryParams;
    headers: RequestOAuthApprovalsHeaders;
}
export declare class RequestOAuthApprovalsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    oAuthApprovals?: shared.OAuthApproval[];
    statusCode: number;
}
