import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecallHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class GetRecallHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetRecallHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRecallHistoryPathParams;

  @Metadata()
  queryParams: GetRecallHistoryQueryParams;
}


export class GetRecallHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  searchResponse?: shared.SearchResponse;

  @Metadata()
  statusCode: number;
}
