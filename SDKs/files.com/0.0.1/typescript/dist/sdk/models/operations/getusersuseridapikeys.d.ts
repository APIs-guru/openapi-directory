import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdApiKeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdApiKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    perPage?: number;
    sortBy?: Map<string, any>;
}
export declare class GetUsersUserIdApiKeysRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdApiKeysPathParams;
    queryParams: GetUsersUserIdApiKeysQueryParams;
}
export declare class GetUsersUserIdApiKeysResponse extends SpeakeasyBase {
    apiKeyEntities?: shared.ApiKeyEntity[];
    contentType: string;
    statusCode: number;
}
