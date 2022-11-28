import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingCarFsboIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarFsboIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" })
  includeRelevantLinks?: boolean;
}


export class GetListingCarFsboIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingCarFsboIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingCarFsboIdQueryParams;
}


export class GetListingCarFsboIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listing?: shared.Listing;

  @SpeakeasyMetadata()
  statusCode: number;
}
