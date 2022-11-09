import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3ImagesIdDownloadhistoryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3ImagesIdDownloadhistoryQueryParams extends SpeakeasyBase {
    companyDownloads?: boolean;
}
export declare class GetV3ImagesIdDownloadhistoryHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ImagesIdDownloadhistoryRequest extends SpeakeasyBase {
    pathParams: GetV3ImagesIdDownloadhistoryPathParams;
    queryParams: GetV3ImagesIdDownloadhistoryQueryParams;
    headers: GetV3ImagesIdDownloadhistoryHeaders;
}
export declare class GetV3ImagesIdDownloadhistoryResponse extends SpeakeasyBase {
    assetDownloadHistoryResults?: shared.AssetDownloadHistoryResults;
    contentType: string;
    statusCode: number;
}
