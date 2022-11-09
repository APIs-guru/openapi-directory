import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3EventsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV3EventsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EventDetailFieldValuesEnum[];
}


export class GetV3EventsIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3EventsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3EventsIdPathParams;

  @Metadata()
  queryParams: GetV3EventsIdQueryParams;

  @Metadata()
  headers: GetV3EventsIdHeaders;
}


export class GetV3EventsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
