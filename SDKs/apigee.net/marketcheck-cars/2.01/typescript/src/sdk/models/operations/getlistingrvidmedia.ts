import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingRvIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingRvIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingRvIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingRvIdMediaPathParams;

  @Metadata()
  queryParams: GetListingRvIdMediaQueryParams;
}


export class GetListingRvIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingMedia?: shared.ListingMedia;

  @Metadata()
  statusCode: number;
}
