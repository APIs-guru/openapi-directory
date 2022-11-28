import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3DownloadsQueryParams extends SpeakeasyBase {
    companyDownloads?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    page?: number;
    pageSize?: number;
    productType?: shared.ProductTypeRequestEnum;
    useTime?: boolean;
}
export declare class GetV3DownloadsHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3DownloadsRequest extends SpeakeasyBase {
    queryParams: GetV3DownloadsQueryParams;
    headers: GetV3DownloadsHeaders;
}
export declare class GetV3DownloadsResponse extends SpeakeasyBase {
    contentType: string;
    getDownloadsResponse?: shared.GetDownloadsResponse;
    statusCode: number;
}
