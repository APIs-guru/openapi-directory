import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingRvIdExtraPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingRvIdExtraQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingRvIdExtraRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingRvIdExtraPathParams;

  @Metadata()
  queryParams: GetListingRvIdExtraQueryParams;
}


export class GetListingRvIdExtraResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @Metadata()
  statusCode: number;
}
