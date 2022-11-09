import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSalesCountCarTypeEnum {
    New = "new"
,    Used = "used"
}

export enum GetSalesCountCountryEnum {
    UsLower = "us"
,    CaLower = "ca"
,    UsUpper = "US"
,    CaUpper = "CA"
}


export class GetSalesCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: GetSalesCountCarTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: GetSalesCountCountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mm" })
  mm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" })
  taxonomyVin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ymm" })
  ymm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;
}


export class GetSalesCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSalesCountQueryParams;
}


export class GetSalesCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  sales?: shared.Sales;

  @Metadata()
  statusCode: number;
}
