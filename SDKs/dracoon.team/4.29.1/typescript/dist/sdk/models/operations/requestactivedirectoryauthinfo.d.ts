import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestActiveDirectoryAuthInfoQueryParams extends SpeakeasyBase {
    isGlobalAvailable?: boolean;
}
export declare class RequestActiveDirectoryAuthInfoRequest extends SpeakeasyBase {
    queryParams: RequestActiveDirectoryAuthInfoQueryParams;
}
export declare class RequestActiveDirectoryAuthInfoResponse extends SpeakeasyBase {
    activeDirectoryAuthInfo?: shared.ActiveDirectoryAuthInfo;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
