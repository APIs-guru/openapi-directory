import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDealerSalesRegionSalesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=month" })
  month: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName: string;
}


export class GetDealerSalesRegionSalesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDealerSalesRegionSalesGetQueryParams;
}


export class GetDealerSalesRegionSalesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: shared.GenericResponse;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
