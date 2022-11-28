import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCarHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class GetCarHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_duplicates" })
  includeDuplicates?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCarHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCarHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCarHistoryQueryParams;
}


export class GetCarHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.HistoricalListing })
  historicalListings?: shared.HistoricalListing[];

  @SpeakeasyMetadata()
  statusCode: number;
}
