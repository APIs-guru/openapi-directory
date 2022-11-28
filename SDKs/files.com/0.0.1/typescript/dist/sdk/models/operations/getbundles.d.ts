import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundlesQueryParams extends SpeakeasyBase {
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
export declare class GetBundlesRequest extends SpeakeasyBase {
    queryParams: GetBundlesQueryParams;
}
export declare class GetBundlesResponse extends SpeakeasyBase {
    bundleEntities?: shared.BundleEntity[];
    contentType: string;
    statusCode: number;
}
