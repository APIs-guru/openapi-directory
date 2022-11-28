import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class GetListingsByRegionAndDateListingsByRegionAndDateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListingsByRegionAndDateListingsByRegionAndDateGetQueryParams;
}


export class GetListingsByRegionAndDateListingsByRegionAndDateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  listingResp?: shared.ListingResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
