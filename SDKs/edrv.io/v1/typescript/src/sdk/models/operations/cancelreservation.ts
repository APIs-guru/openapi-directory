import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelreservationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reservation" })
  reservation?: string;
}


export class CancelreservationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CancelreservationRequestBody;
}


export class Cancelreservation201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class CancelreservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cancelreservation201ApplicationJsonObject?: Cancelreservation201ApplicationJson;
}
