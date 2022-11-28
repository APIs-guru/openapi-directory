import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingsByRegionListingsByRegionGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=daysBack" })
  daysBack?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName: string;
}


export class GetListingsByRegionListingsByRegionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListingsByRegionListingsByRegionGetQueryParams;
}


export class GetListingsByRegionListingsByRegionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  listingResp?: shared.ListingResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
