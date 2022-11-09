import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3PurchasedAssetsQueryParams extends SpeakeasyBase {
    companyPurchases?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    page?: number;
    pageSize?: number;
}
export declare class GetV3PurchasedAssetsHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3PurchasedAssetsRequest extends SpeakeasyBase {
    queryParams: GetV3PurchasedAssetsQueryParams;
    headers: GetV3PurchasedAssetsHeaders;
}
export declare class GetV3PurchasedAssetsResponse extends SpeakeasyBase {
    contentType: string;
    previousAssetPurchases?: shared.PreviousAssetPurchases;
    statusCode: number;
}
