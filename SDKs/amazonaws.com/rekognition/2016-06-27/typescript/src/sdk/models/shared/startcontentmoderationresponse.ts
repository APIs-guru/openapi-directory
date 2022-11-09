import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartContentModerationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
