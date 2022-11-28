import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGeneralSettingsInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestGeneralSettingsInfoRequest extends SpeakeasyBase {
    headers: RequestGeneralSettingsInfoHeaders;
}
export declare class RequestGeneralSettingsInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    generalSettingsInfo?: shared.GeneralSettingsInfo;
    statusCode: number;
}
