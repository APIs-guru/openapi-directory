import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatereservationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatereservationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connector" })
  connector?: number;

  @Metadata({ data: "json, name=driver" })
  driver?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=evse" })
  evse?: number;
}


export class UpdatereservationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatereservationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatereservationRequestBody;
}


export class Updatereservation201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class UpdatereservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatereservation201ApplicationJsonObject?: Updatereservation201ApplicationJson;
}
