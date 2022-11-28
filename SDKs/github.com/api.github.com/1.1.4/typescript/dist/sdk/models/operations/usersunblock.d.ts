import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersUnblockPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersUnblockRequest extends SpeakeasyBase {
    pathParams: UsersUnblockPathParams;
}
export declare class UsersUnblockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
