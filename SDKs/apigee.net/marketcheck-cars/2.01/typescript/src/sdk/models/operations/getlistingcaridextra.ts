import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingCarIdExtraPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarIdExtraQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingCarIdExtraRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingCarIdExtraPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingCarIdExtraQueryParams;
}


export class GetListingCarIdExtraResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @SpeakeasyMetadata()
  statusCode: number;
}
