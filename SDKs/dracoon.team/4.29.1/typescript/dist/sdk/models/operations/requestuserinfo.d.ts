import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserInfoQueryParams extends SpeakeasyBase {
    moreInfo?: boolean;
}
export declare class RequestUserInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUserInfoRequest extends SpeakeasyBase {
    queryParams: RequestUserInfoQueryParams;
    headers: RequestUserInfoHeaders;
}
export declare class RequestUserInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userAccount?: shared.UserAccount;
}
