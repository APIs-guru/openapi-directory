import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostChargeStations201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargestation" })
  chargestation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;
}


export class PostChargeStationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Schema1;
}


export class PostChargeStationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postChargeStations201ApplicationJsonObject?: PostChargeStations201ApplicationJson;
}
