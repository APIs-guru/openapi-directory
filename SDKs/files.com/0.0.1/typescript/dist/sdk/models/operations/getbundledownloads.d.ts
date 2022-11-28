import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundleDownloadsQueryParams extends SpeakeasyBase {
    bundleId?: number;
    bundleRegistrationId?: number;
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
export declare class GetBundleDownloadsRequest extends SpeakeasyBase {
    queryParams: GetBundleDownloadsQueryParams;
}
export declare class GetBundleDownloadsResponse extends SpeakeasyBase {
    bundleDownloadEntities?: shared.BundleDownloadEntity[];
    contentType: string;
    statusCode: number;
}
