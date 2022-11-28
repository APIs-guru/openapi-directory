import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListings2Listings2GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=daysBack" })
  daysBack?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealerID" })
  dealerId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedSearch" })
  extendedSearch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelYear" })
  modelYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zipCode" })
  zipCode?: number;
}


export class GetListings2Listings2GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListings2Listings2GetQueryParams;
}


export class GetListings2Listings2GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  listingResp?: shared.ListingResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
