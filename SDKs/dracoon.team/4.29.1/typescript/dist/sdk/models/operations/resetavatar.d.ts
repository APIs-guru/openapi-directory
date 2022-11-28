import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetAvatarHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ResetAvatarRequest extends SpeakeasyBase {
    headers: ResetAvatarHeaders;
}
export declare class ResetAvatarResponse extends SpeakeasyBase {
    avatar?: shared.Avatar;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
