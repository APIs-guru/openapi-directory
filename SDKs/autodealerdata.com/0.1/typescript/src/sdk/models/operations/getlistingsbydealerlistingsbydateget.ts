import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingsByDealerListingsByDateGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dealerID" })
  dealerId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newCars" })
  newCars?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class GetListingsByDealerListingsByDateGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListingsByDealerListingsByDateGetQueryParams;
}


export class GetListingsByDealerListingsByDateGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  listingResp?: shared.ListingResp;

  @Metadata()
  statusCode: number;
}
