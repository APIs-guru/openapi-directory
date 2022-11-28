import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingRvIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingRvIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingRvIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingRvIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingRvIdQueryParams;
}


export class GetListingRvIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  rvListing?: shared.RvListing;

  @SpeakeasyMetadata()
  statusCode: number;
}
