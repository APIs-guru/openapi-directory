import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListingsByZipCodeListingsByZipCodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zipCode" })
  zipCode: number;
}


export class ListingsByZipCodeListingsByZipCodeGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListingsByZipCodeListingsByZipCodeGetQueryParams;
}


export class ListingsByZipCodeListingsByZipCodeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  listingResp?: shared.ListingResp;

  @Metadata()
  statusCode: number;
}
