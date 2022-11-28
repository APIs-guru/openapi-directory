import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserAvatarPathParams extends SpeakeasyBase {
    userId: number;
    uuid: string;
}
export declare class RequestUserAvatarRequest extends SpeakeasyBase {
    pathParams: RequestUserAvatarPathParams;
}
export declare class RequestUserAvatarResponse extends SpeakeasyBase {
    avatar?: shared.Avatar;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
