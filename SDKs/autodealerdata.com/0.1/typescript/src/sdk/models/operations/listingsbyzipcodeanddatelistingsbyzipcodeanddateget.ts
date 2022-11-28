import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zipCode" })
  zipCode: number;
}


export class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListingsByZipCodeAndDateListingsByZipCodeAndDateGetQueryParams;
}


export class ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  listingResp?: shared.ListingResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
