import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGeneralSettingsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateGeneralSettingsRequest extends SpeakeasyBase {
    headers: UpdateGeneralSettingsHeaders;
    request: shared.UpdateGeneralSettings;
}
export declare class UpdateGeneralSettingsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    generalSettings?: shared.GeneralSettings;
    statusCode: number;
}
