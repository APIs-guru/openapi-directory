import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingCarAuctionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingCarAuctionIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=append_api_key" })
  appendApiKey?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_relevant_links" })
  includeRelevantLinks?: boolean;
}


export class GetListingCarAuctionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingCarAuctionIdPathParams;

  @Metadata()
  queryParams: GetListingCarAuctionIdQueryParams;
}


export class GetListingCarAuctionIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listing?: shared.Listing;

  @Metadata()
  statusCode: number;
}
