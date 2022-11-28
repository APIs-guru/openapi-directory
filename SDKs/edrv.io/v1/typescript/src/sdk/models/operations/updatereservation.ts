import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatereservationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatereservationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connector" })
  connector?: number;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=evse" })
  evse?: number;
}


export class Updatereservation201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class UpdatereservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatereservationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatereservationRequestBody;
}


export class UpdatereservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatereservation201ApplicationJsonObject?: Updatereservation201ApplicationJson;
}
