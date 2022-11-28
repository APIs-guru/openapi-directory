import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSettingsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestSettingsRequest extends SpeakeasyBase {
    headers: RequestSettingsHeaders;
}
export declare class RequestSettingsResponse extends SpeakeasyBase {
    contentType: string;
    customerSettingsResponse?: shared.CustomerSettingsResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
