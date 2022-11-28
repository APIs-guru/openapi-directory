import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersBlockPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersBlockRequest extends SpeakeasyBase {
    pathParams: UsersBlockPathParams;
}
export declare class UsersBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
