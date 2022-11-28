import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEventlogConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateEventlogConfigRequest extends SpeakeasyBase {
    headers: UpdateEventlogConfigHeaders;
    request: shared.UpdateEventlogConfig;
}
export declare class UpdateEventlogConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventlogConfig?: shared.EventlogConfig;
    statusCode: number;
}
