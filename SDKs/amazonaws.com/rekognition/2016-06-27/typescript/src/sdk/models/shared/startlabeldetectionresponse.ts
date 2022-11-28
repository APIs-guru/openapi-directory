import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartLabelDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
