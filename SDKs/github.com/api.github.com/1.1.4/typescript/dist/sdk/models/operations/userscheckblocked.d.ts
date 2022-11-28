import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersCheckBlockedPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersCheckBlockedRequest extends SpeakeasyBase {
    pathParams: UsersCheckBlockedPathParams;
}
export declare class UsersCheckBlockedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
