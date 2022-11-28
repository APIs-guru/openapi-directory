import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingCarIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class GetListingCarIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingCarIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingCarIdMediaQueryParams;
}


export class GetListingCarIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingMedia?: shared.ListingMedia;

  @SpeakeasyMetadata()
  statusCode: number;
}
