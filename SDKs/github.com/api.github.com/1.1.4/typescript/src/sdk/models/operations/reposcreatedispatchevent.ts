import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateDispatchEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateDispatchEventRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_payload" })
  clientPayload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType: string;
}


export class ReposCreateDispatchEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateDispatchEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDispatchEventRequestBody;
}


export class ReposCreateDispatchEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
