import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3PurchasedAssetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_purchases" })
  companyPurchases?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3PurchasedAssetsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3PurchasedAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3PurchasedAssetsQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3PurchasedAssetsHeaders;
}


export class GetV3PurchasedAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  previousAssetPurchases?: shared.PreviousAssetPurchases;

  @SpeakeasyMetadata()
  statusCode: number;
}
