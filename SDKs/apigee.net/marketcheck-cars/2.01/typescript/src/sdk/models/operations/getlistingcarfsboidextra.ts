import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingCarFsboIdExtraPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarFsboIdExtraQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingCarFsboIdExtraRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingCarFsboIdExtraPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingCarFsboIdExtraQueryParams;
}


export class GetListingCarFsboIdExtraResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @SpeakeasyMetadata()
  statusCode: number;
}
