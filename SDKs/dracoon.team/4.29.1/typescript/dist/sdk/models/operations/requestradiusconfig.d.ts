import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRadiusConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRadiusConfigRequest extends SpeakeasyBase {
    headers: RequestRadiusConfigHeaders;
}
export declare class RequestRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    radiusConfig?: shared.RadiusConfig;
    statusCode: number;
}
