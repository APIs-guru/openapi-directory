import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSiteApiKeysQueryParams extends SpeakeasyBase {
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
export declare class GetSiteApiKeysRequest extends SpeakeasyBase {
    queryParams: GetSiteApiKeysQueryParams;
}
export declare class GetSiteApiKeysResponse extends SpeakeasyBase {
    apiKeyEntities?: shared.ApiKeyEntity[];
    contentType: string;
    statusCode: number;
}
