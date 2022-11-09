import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCarHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}


export class GetCarHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_duplicates" })
  includeDuplicates?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetCarHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCarHistoryPathParams;

  @Metadata()
  queryParams: GetCarHistoryQueryParams;
}


export class GetCarHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.HistoricalListing })
  historicalListings?: shared.HistoricalListing[];

  @Metadata()
  statusCode: number;
}
