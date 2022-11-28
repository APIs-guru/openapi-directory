import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAvatarHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestAvatarRequest extends SpeakeasyBase {
    headers: RequestAvatarHeaders;
}
export declare class RequestAvatarResponse extends SpeakeasyBase {
    avatar?: shared.Avatar;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
