import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealtimeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=sec-websocket-protocol" })
  secWebsocketProtocol: string;
}


export class GetRealtimeRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRealtimeHeaders;
}


export class GetRealtimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
