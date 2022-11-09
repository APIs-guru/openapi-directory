import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTextTranslationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
