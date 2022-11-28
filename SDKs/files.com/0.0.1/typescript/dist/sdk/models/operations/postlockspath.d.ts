import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLocksPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PostLocksPathRequestBody extends SpeakeasyBase {
    allowAccessByAnyUser?: boolean;
    exclusive?: boolean;
    recursive?: string;
    timeout?: number;
}
export declare class PostLocksPathRequest extends SpeakeasyBase {
    pathParams: PostLocksPathPathParams;
    request?: PostLocksPathRequestBody;
}
export declare class PostLocksPathResponse extends SpeakeasyBase {
    contentType: string;
    lockEntity?: shared.LockEntity;
    statusCode: number;
}
