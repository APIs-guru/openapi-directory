import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserPublicKeysRequestBody extends SpeakeasyBase {
    publicKey: string;
    title: string;
    userId?: number;
}
export declare class PostUserPublicKeysRequest extends SpeakeasyBase {
    request?: PostUserPublicKeysRequestBody;
}
export declare class PostUserPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
}
