import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3EventsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV3EventsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EventDetailFieldValuesEnum[];
}


export class GetV3EventsIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3EventsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3EventsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3EventsIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3EventsIdHeaders;
}


export class GetV3EventsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
