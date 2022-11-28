import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetPublicKeysRequest extends SpeakeasyBase {
    queryParams: GetPublicKeysQueryParams;
}
export declare class GetPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntities?: shared.PublicKeyEntity[];
    statusCode: number;
}
