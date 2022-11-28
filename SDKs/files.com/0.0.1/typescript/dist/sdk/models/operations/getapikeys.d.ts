import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    perPage?: number;
    sortBy?: Map<string, any>;
    userId?: number;
}
export declare class GetApiKeysRequest extends SpeakeasyBase {
    queryParams: GetApiKeysQueryParams;
}
export declare class GetApiKeysResponse extends SpeakeasyBase {
    apiKeyEntities?: shared.ApiKeyEntity[];
    contentType: string;
    statusCode: number;
}
