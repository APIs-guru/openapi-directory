import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPublicKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetUserPublicKeysRequest extends SpeakeasyBase {
    queryParams: GetUserPublicKeysQueryParams;
}
export declare class GetUserPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntities?: shared.PublicKeyEntity[];
    statusCode: number;
}
