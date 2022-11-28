import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelreservationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reservation" })
  reservation?: string;
}


export class Cancelreservation201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class CancelreservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CancelreservationRequestBody;
}


export class CancelreservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelreservation201ApplicationJsonObject?: Cancelreservation201ApplicationJson;
}
