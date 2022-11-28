import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTextTranslationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
