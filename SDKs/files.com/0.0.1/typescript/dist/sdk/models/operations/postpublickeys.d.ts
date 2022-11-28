import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPublicKeysRequestBody extends SpeakeasyBase {
    publicKey: string;
    title: string;
    userId?: number;
}
export declare class PostPublicKeysRequest extends SpeakeasyBase {
    request?: PostPublicKeysRequestBody;
}
export declare class PostPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
}
