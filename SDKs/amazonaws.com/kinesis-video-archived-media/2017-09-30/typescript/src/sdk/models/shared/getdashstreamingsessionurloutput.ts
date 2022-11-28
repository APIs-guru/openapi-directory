import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDashStreamingSessionUrlOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DASHStreamingSessionURL" })
  dashStreamingSessionUrl?: string;
}
