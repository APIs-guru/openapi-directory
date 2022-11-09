import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingsByRegionListingsByRegionGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=daysBack" })
  daysBack?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName: string;
}


export class GetListingsByRegionListingsByRegionGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListingsByRegionListingsByRegionGetQueryParams;
}


export class GetListingsByRegionListingsByRegionGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  listingResp?: shared.ListingResp;

  @Metadata()
  statusCode: number;
}
