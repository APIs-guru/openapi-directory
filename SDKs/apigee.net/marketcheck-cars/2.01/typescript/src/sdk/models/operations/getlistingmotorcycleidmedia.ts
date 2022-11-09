import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingMotorcycleIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingMotorcycleIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingMotorcycleIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingMotorcycleIdMediaPathParams;

  @Metadata()
  queryParams: GetListingMotorcycleIdMediaQueryParams;
}


export class GetListingMotorcycleIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingMedia?: shared.ListingMedia;

  @Metadata()
  statusCode: number;
}
