import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSystemSettingsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateSystemSettingsRequest extends SpeakeasyBase {
    headers: UpdateSystemSettingsHeaders;
    request: shared.ConfigOptionList;
}
export declare class UpdateSystemSettingsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
