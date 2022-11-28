import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAdConfigPathParams extends SpeakeasyBase {
    adId: number;
}
export declare class RequestAdConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestAdConfigRequest extends SpeakeasyBase {
    pathParams: RequestAdConfigPathParams;
    headers: RequestAdConfigHeaders;
}
export declare class RequestAdConfigResponse extends SpeakeasyBase {
    activeDirectoryConfig?: shared.ActiveDirectoryConfig;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
