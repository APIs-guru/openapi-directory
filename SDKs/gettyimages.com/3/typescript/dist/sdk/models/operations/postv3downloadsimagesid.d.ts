import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV3DownloadsImagesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostV3DownloadsImagesIdQueryParams extends SpeakeasyBase {
    autoDownload?: boolean;
    fileType?: shared.DownloadFileTypeEnum;
    height?: string;
    productId?: number;
    productType?: shared.ProductTypeRequestEnum;
    useTeamCredits?: boolean;
}
export declare class PostV3DownloadsImagesIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class PostV3DownloadsImagesIdRequests extends SpeakeasyBase {
    premiumAccessDownloadData?: shared.PremiumAccessDownloadData;
    premiumAccessDownloadData1?: shared.PremiumAccessDownloadData;
    premiumAccessDownloadData2?: shared.PremiumAccessDownloadData;
    premiumAccessDownloadData3?: shared.PremiumAccessDownloadData;
}
export declare class PostV3DownloadsImagesIdRequest extends SpeakeasyBase {
    pathParams: PostV3DownloadsImagesIdPathParams;
    queryParams: PostV3DownloadsImagesIdQueryParams;
    headers: PostV3DownloadsImagesIdHeaders;
    request?: PostV3DownloadsImagesIdRequests;
}
export declare class PostV3DownloadsImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
