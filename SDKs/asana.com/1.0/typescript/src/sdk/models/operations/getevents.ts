import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sync" })
  sync?: string;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsQueryParams;
}


// GetEvents200ApplicationJson
/** 
 * The full record for all events that have occurred since the sync token was created.
**/
export class GetEvents200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.EventResponse })
  data?: shared.EventResponse[];

  @Metadata({ data: "json, name=sync" })
  sync?: string;
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEvents200ApplicationJsonObject?: GetEvents200ApplicationJson;
}
