import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingRvIdExtraPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingRvIdExtraQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingRvIdExtraRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingRvIdExtraPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingRvIdExtraQueryParams;
}


export class GetListingRvIdExtraResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @SpeakeasyMetadata()
  statusCode: number;
}
