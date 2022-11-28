import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPublicKeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchPublicKeysIdRequestBody extends SpeakeasyBase {
    title: string;
}
export declare class PatchPublicKeysIdRequest extends SpeakeasyBase {
    pathParams: PatchPublicKeysIdPathParams;
    request: PatchPublicKeysIdRequestBody;
}
export declare class PatchPublicKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
}
