import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemsMediaClipFilesQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetItemsMediaClipFilesRequest extends SpeakeasyBase {
    queryParams: GetItemsMediaClipFilesQueryParams;
    request: shared.ItemDownloadableRequest;
}
export declare class GetItemsMediaClipFilesResponse extends SpeakeasyBase {
    contentType: string;
    itemClipFilesList?: shared.ItemClipFilesList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
