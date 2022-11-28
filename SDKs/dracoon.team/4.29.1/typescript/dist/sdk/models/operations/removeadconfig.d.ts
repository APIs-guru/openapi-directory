import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAdConfigPathParams extends SpeakeasyBase {
    adId: number;
}
export declare class RemoveAdConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveAdConfigRequest extends SpeakeasyBase {
    pathParams: RemoveAdConfigPathParams;
    headers: RemoveAdConfigHeaders;
}
export declare class RemoveAdConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
