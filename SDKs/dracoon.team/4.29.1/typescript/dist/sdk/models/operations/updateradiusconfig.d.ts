import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRadiusConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateRadiusConfigRequest extends SpeakeasyBase {
    headers: UpdateRadiusConfigHeaders;
    request: shared.RadiusConfigUpdateRequest;
}
export declare class UpdateRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    radiusConfig?: shared.RadiusConfig;
    statusCode: number;
}
