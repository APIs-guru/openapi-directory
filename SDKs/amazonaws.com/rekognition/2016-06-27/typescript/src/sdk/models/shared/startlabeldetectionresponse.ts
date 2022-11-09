import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartLabelDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
