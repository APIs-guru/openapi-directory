import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchChargeStationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchChargeStation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PatchChargeStationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchChargeStationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Schema1;
}


export class PatchChargeStationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchChargeStation200ApplicationJsonObject?: PatchChargeStation200ApplicationJson;
}
