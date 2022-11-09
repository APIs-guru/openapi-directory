import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3PurchasedAssetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=company_purchases" })
  companyPurchases?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetV3PurchasedAssetsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3PurchasedAssetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3PurchasedAssetsQueryParams;

  @Metadata()
  headers: GetV3PurchasedAssetsHeaders;
}


export class GetV3PurchasedAssetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  previousAssetPurchases?: shared.PreviousAssetPurchases;

  @Metadata()
  statusCode: number;
}
