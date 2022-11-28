import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingRvIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingRvIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingRvIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingRvIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingRvIdMediaQueryParams;
}


export class GetListingRvIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingMedia?: shared.ListingMedia;

  @SpeakeasyMetadata()
  statusCode: number;
}
