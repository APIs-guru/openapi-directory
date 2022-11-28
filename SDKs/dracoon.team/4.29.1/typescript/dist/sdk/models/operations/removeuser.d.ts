import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RemoveUserHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveUserRequest extends SpeakeasyBase {
    pathParams: RemoveUserPathParams;
    headers: RemoveUserHeaders;
}
export declare class RemoveUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
