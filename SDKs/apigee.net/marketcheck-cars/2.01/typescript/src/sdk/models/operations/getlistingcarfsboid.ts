import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingCarFsboIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarFsboIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" })
  includeRelevantLinks?: boolean;
}


export class GetListingCarFsboIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingCarFsboIdPathParams;

  @Metadata()
  queryParams: GetListingCarFsboIdQueryParams;
}


export class GetListingCarFsboIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listing?: shared.Listing;

  @Metadata()
  statusCode: number;
}
