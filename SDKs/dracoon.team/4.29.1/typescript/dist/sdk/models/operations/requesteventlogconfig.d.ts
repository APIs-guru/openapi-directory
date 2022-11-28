import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestEventlogConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestEventlogConfigRequest extends SpeakeasyBase {
    headers: RequestEventlogConfigHeaders;
}
export declare class RequestEventlogConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventlogConfig?: shared.EventlogConfig;
    statusCode: number;
}
