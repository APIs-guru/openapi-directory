import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPathParams extends SpeakeasyBase {
    userGid: string;
}
export declare class GetUserQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetUser200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserResponse;
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
    queryParams: GetUserQueryParams;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getUser200ApplicationJsonObject?: GetUser200ApplicationJson;
}
