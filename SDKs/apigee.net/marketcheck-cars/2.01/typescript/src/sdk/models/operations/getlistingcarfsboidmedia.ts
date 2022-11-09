import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingCarFsboIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarFsboIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;
}


export class GetListingCarFsboIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingCarFsboIdMediaPathParams;

  @Metadata()
  queryParams: GetListingCarFsboIdMediaQueryParams;
}


export class GetListingCarFsboIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingMedia?: shared.ListingMedia;

  @Metadata()
  statusCode: number;
}
