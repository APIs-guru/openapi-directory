import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingCarIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class GetListingCarIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingCarIdMediaPathParams;

  @Metadata()
  queryParams: GetListingCarIdMediaQueryParams;
}


export class GetListingCarIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingMedia?: shared.ListingMedia;

  @Metadata()
  statusCode: number;
}
