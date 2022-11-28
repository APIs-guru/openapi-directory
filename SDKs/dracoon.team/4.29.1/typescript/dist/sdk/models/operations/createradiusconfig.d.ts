import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRadiusConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateRadiusConfigRequest extends SpeakeasyBase {
    headers: CreateRadiusConfigHeaders;
    request: shared.RadiusConfigCreateRequest;
}
export declare class CreateRadiusConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    radiusConfig?: shared.RadiusConfig;
    statusCode: number;
}
