import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3EventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EventDetailFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: number[];
}


export class GetV3EventsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3EventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3EventsQueryParams;

  @Metadata()
  headers: GetV3EventsHeaders;
}


export class GetV3EventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
