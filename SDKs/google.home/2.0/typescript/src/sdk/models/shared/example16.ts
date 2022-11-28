import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example16 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytes_received" })
  bytesReceived: number;

  @SpeakeasyMetadata({ data: "json, name=response_code" })
  responseCode: number;

  @SpeakeasyMetadata({ data: "json, name=time_for_data_fetch" })
  timeForDataFetch: number;

  @SpeakeasyMetadata({ data: "json, name=time_for_http_response" })
  timeForHttpResponse: number;
}
