import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingCarFsboIdExtraPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarFsboIdExtraQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingCarFsboIdExtraRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingCarFsboIdExtraPathParams;

  @Metadata()
  queryParams: GetListingCarFsboIdExtraQueryParams;
}


export class GetListingCarFsboIdExtraResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @Metadata()
  statusCode: number;
}
