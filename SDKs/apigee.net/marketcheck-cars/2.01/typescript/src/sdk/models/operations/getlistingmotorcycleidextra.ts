import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingMotorcycleIdExtraPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingMotorcycleIdExtraQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingMotorcycleIdExtraRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingMotorcycleIdExtraPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingMotorcycleIdExtraQueryParams;
}


export class GetListingMotorcycleIdExtraResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @SpeakeasyMetadata()
  statusCode: number;
}
