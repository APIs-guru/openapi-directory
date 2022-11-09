import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostChargeStationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Schema1;
}


export class PostChargeStations201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class PostChargeStationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postChargeStations201ApplicationJsonObject?: PostChargeStations201ApplicationJson;
}
