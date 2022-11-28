import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGeneralSettingsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestGeneralSettingsRequest extends SpeakeasyBase {
    headers: RequestGeneralSettingsHeaders;
}
export declare class RequestGeneralSettingsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    generalSettings?: shared.GeneralSettings;
    statusCode: number;
}
