import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOpenIdAuthInfoQueryParams extends SpeakeasyBase {
    isGlobalAvailable?: boolean;
}
export declare class RequestOpenIdAuthInfoRequest extends SpeakeasyBase {
    queryParams: RequestOpenIdAuthInfoQueryParams;
}
export declare class RequestOpenIdAuthInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdAuthInfo?: shared.OpenIdAuthInfo;
    statusCode: number;
}
