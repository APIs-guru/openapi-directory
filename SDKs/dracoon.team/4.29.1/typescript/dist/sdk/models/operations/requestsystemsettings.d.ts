import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSystemSettingsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestSystemSettingsRequest extends SpeakeasyBase {
    headers: RequestSystemSettingsHeaders;
}
export declare class RequestSystemSettingsResponse extends SpeakeasyBase {
    configOptionList?: shared.ConfigOptionList;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
