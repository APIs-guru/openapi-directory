import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHlsStreamingSessionUrlOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HLSStreamingSessionURL" })
  hlsStreamingSessionUrl?: string;
}
