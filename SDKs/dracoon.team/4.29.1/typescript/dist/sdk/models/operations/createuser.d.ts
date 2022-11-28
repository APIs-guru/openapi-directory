import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUserHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    headers: CreateUserHeaders;
    request: shared.CreateUserRequest;
}
export declare class CreateUserResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userData?: shared.UserDataOutput;
    createUser400ApplicationJsonOneOf?: any;
}
