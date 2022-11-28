import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingCarFsboIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarFsboIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class GetListingCarFsboIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingCarFsboIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingCarFsboIdMediaQueryParams;
}


export class GetListingCarFsboIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingMedia?: shared.ListingMedia;

  @SpeakeasyMetadata()
  statusCode: number;
}
