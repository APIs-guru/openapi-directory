import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealtimeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=sec-websocket-protocol" })
  secWebsocketProtocol: string;
}


export class GetRealtimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetRealtimeHeaders;
}


export class GetRealtimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
