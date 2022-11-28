import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetSettingsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SetSettingsRequest extends SpeakeasyBase {
    headers: SetSettingsHeaders;
    request: shared.CustomerSettingsRequest;
}
export declare class SetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    customerSettingsResponse?: shared.CustomerSettingsResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
