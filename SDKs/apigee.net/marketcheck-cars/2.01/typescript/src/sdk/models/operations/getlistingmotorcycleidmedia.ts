import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingMotorcycleIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingMotorcycleIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingMotorcycleIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingMotorcycleIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingMotorcycleIdMediaQueryParams;
}


export class GetListingMotorcycleIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingMedia?: shared.ListingMedia;

  @SpeakeasyMetadata()
  statusCode: number;
}
