import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_id" })
  eventId: string;
}


export class GetEventHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class GetEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventPathParams;

  @Metadata()
  headers: GetEventHeaders;

  @Metadata()
  security: GetEventSecurity;
}


export class GetEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  event?: shared.Event;

  @Metadata()
  statusCode: number;
}
