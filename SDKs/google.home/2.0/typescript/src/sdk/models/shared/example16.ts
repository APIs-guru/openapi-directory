import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example16 extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytes_received" })
  bytesReceived: number;

  @Metadata({ data: "json, name=response_code" })
  responseCode: number;

  @Metadata({ data: "json, name=time_for_data_fetch" })
  timeForDataFetch: number;

  @Metadata({ data: "json, name=time_for_http_response" })
  timeForHttpResponse: number;
}
