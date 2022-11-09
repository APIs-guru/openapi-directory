import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3DownloadsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=company_downloads" })
  companyDownloads?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: shared.ProductTypeRequestEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=use_time" })
  useTime?: boolean;
}


export class GetV3DownloadsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3DownloadsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3DownloadsQueryParams;

  @Metadata()
  headers: GetV3DownloadsHeaders;
}


export class GetV3DownloadsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDownloadsResponse?: shared.GetDownloadsResponse;

  @Metadata()
  statusCode: number;
}
