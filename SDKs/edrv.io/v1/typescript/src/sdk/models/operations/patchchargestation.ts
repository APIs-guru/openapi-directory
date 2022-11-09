import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchChargeStationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchChargeStationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchChargeStationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Schema1;
}


export class PatchChargeStation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PatchChargeStationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchChargeStation200ApplicationJsonObject?: PatchChargeStation200ApplicationJson;
}
