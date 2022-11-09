import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListings2Listings2GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=daysBack" })
  daysBack?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealerID" })
  dealerId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedSearch" })
  extendedSearch?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelYear" })
  modelYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zipCode" })
  zipCode?: number;
}


export class GetListings2Listings2GetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListings2Listings2GetQueryParams;
}


export class GetListings2Listings2GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  listingResp?: shared.ListingResp;

  @Metadata()
  statusCode: number;
}
