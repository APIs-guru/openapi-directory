import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingRvIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingRvIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingRvIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingRvIdPathParams;

  @Metadata()
  queryParams: GetListingRvIdQueryParams;
}


export class GetListingRvIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  rvListing?: shared.RvListing;

  @Metadata()
  statusCode: number;
}
