import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTextTranslationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
