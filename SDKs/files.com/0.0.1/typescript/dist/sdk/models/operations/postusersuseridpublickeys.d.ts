import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdPublicKeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class PostUsersUserIdPublicKeysRequestBody extends SpeakeasyBase {
    publicKey: string;
    title: string;
}
export declare class PostUsersUserIdPublicKeysRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdPublicKeysPathParams;
    request: PostUsersUserIdPublicKeysRequestBody;
}
export declare class PostUsersUserIdPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
}
