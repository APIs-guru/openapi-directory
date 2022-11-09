import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteChargeStationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteChargeStationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteChargeStationPathParams;
}


export class DeleteChargeStationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
