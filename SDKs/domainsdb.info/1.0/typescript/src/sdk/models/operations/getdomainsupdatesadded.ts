import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainsUpdatesAddedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetDomainsUpdatesAddedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDomainsUpdatesAddedQueryParams;
}


export class GetDomainsUpdatesAddedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchResults?: shared.SearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
