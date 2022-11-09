import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainsUpdatesDeletedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetDomainsUpdatesDeletedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainsUpdatesDeletedQueryParams;
}


export class GetDomainsUpdatesDeletedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchResults?: shared.SearchResults;

  @Metadata()
  statusCode: number;
}
