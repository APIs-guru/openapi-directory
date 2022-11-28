import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UpdateUserHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    headers: UpdateUserHeaders;
    request: shared.UpdateUserRequest;
}
export declare class UpdateUserResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userData?: shared.UserDataOutput;
}
