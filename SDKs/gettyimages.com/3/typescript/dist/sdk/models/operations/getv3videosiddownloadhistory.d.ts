import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3VideosIdDownloadhistoryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV3VideosIdDownloadhistoryQueryParams extends SpeakeasyBase {
    companyDownloads?: boolean;
}
export declare class GetV3VideosIdDownloadhistoryHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3VideosIdDownloadhistoryRequest extends SpeakeasyBase {
    pathParams: GetV3VideosIdDownloadhistoryPathParams;
    queryParams: GetV3VideosIdDownloadhistoryQueryParams;
    headers: GetV3VideosIdDownloadhistoryHeaders;
}
export declare class GetV3VideosIdDownloadhistoryResponse extends SpeakeasyBase {
    assetDownloadHistoryResults?: shared.AssetDownloadHistoryResults;
    contentType: string;
    statusCode: number;
}
