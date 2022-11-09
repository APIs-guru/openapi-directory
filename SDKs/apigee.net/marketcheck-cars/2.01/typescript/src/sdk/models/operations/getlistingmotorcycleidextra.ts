import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingMotorcycleIdExtraPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingMotorcycleIdExtraQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingMotorcycleIdExtraRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingMotorcycleIdExtraPathParams;

  @Metadata()
  queryParams: GetListingMotorcycleIdExtraQueryParams;
}


export class GetListingMotorcycleIdExtraResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @Metadata()
  statusCode: number;
}
