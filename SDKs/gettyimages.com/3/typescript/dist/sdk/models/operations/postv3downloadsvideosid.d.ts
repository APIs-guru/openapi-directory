import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV3DownloadsVideosIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostV3DownloadsVideosIdQueryParams extends SpeakeasyBase {
    autoDownload?: boolean;
    productId?: number;
    size?: string;
    useTeamCredits?: boolean;
}
export declare class PostV3DownloadsVideosIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class PostV3DownloadsVideosIdRequests extends SpeakeasyBase {
    premiumAccessDownloadData?: shared.PremiumAccessDownloadData;
    premiumAccessDownloadData1?: shared.PremiumAccessDownloadData;
    premiumAccessDownloadData2?: shared.PremiumAccessDownloadData;
    premiumAccessDownloadData3?: shared.PremiumAccessDownloadData;
}
export declare class PostV3DownloadsVideosIdRequest extends SpeakeasyBase {
    pathParams: PostV3DownloadsVideosIdPathParams;
    queryParams: PostV3DownloadsVideosIdQueryParams;
    headers: PostV3DownloadsVideosIdHeaders;
    request?: PostV3DownloadsVideosIdRequests;
}
export declare class PostV3DownloadsVideosIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
