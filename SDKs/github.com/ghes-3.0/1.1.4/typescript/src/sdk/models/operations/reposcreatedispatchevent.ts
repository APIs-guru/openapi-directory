import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateDispatchEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateDispatchEventRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_payload" })
  clientPayload?: Map<string, any>;

  @Metadata({ data: "json, name=event_type" })
  eventType: string;
}


export class ReposCreateDispatchEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateDispatchEventPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDispatchEventRequestBody;
}


export class ReposCreateDispatchEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: shared.ValidationError;
}
