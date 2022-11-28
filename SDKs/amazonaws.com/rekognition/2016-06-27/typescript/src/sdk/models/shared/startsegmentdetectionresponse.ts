import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartSegmentDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
