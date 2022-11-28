import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPersonTrackingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
