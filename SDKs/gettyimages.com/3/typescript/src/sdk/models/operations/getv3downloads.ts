import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3DownloadsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_downloads" })
  companyDownloads?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: shared.ProductTypeRequestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_time" })
  useTime?: boolean;
}


export class GetV3DownloadsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3DownloadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3DownloadsQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3DownloadsHeaders;
}


export class GetV3DownloadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDownloadsResponse?: shared.GetDownloadsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
