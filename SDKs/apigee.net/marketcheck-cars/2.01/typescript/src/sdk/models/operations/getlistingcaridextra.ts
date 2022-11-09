import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingCarIdExtraPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarIdExtraQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingCarIdExtraRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingCarIdExtraPathParams;

  @Metadata()
  queryParams: GetListingCarIdExtraQueryParams;
}


export class GetListingCarIdExtraResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @Metadata()
  statusCode: number;
}
