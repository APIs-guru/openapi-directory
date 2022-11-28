import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAdConfigPathParams extends SpeakeasyBase {
    adId: number;
}
export declare class UpdateAdConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateAdConfigRequest extends SpeakeasyBase {
    pathParams: UpdateAdConfigPathParams;
    headers: UpdateAdConfigHeaders;
    request: shared.UpdateActiveDirectoryConfigRequest;
}
export declare class UpdateAdConfigResponse extends SpeakeasyBase {
    activeDirectoryConfig?: shared.ActiveDirectoryConfig;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
