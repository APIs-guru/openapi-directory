import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingCarAuctionIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarAuctionIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class GetListingCarAuctionIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingCarAuctionIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingCarAuctionIdMediaQueryParams;
}


export class GetListingCarAuctionIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingMedia?: shared.ListingMedia;

  @SpeakeasyMetadata()
  statusCode: number;
}
