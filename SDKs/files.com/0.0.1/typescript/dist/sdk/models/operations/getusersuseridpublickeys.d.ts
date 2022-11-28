import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdPublicKeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdPublicKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetUsersUserIdPublicKeysRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdPublicKeysPathParams;
    queryParams: GetUsersUserIdPublicKeysQueryParams;
}
export declare class GetUsersUserIdPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    publicKeyEntities?: shared.PublicKeyEntity[];
    statusCode: number;
}
