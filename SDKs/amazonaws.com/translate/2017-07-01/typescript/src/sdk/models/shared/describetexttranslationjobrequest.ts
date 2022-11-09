import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTextTranslationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
