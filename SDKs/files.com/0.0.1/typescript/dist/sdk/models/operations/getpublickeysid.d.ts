import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicKeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPublicKeysIdRequest extends SpeakeasyBase {
    pathParams: GetPublicKeysIdPathParams;
}
export declare class GetPublicKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntity?: shared.PublicKeyEntity;
    statusCode: number;
}
