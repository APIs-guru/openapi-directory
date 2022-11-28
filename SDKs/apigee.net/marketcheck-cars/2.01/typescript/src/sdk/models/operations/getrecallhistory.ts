import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecallHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class GetRecallHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetRecallHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecallHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRecallHistoryQueryParams;
}


export class GetRecallHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  searchResponse?: shared.SearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
