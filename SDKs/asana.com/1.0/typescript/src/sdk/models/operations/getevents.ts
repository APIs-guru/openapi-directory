import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync" })
  sync?: string;
}


// GetEvents200ApplicationJson
/** 
 * The full record for all events that have occurred since the sync token was created.
**/
export class GetEvents200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.EventResponse })
  data?: shared.EventResponse[];

  @SpeakeasyMetadata({ data: "json, name=sync" })
  sync?: string;
}


export class GetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsQueryParams;
}


export class GetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEvents200ApplicationJsonObject?: GetEvents200ApplicationJson;
}
