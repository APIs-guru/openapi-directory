import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPersonTrackingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
