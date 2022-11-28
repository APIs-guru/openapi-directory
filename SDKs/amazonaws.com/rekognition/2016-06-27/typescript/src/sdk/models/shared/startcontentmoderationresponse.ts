import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartContentModerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
