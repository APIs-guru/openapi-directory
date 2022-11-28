import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSystemDefaultsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateSystemDefaultsRequest extends SpeakeasyBase {
    headers: UpdateSystemDefaultsHeaders;
    request: shared.UpdateSystemDefaults;
}
export declare class UpdateSystemDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    systemDefaults?: shared.SystemDefaults;
}
