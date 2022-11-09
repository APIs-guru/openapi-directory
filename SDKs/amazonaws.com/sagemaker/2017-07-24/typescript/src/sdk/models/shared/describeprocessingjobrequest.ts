import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProcessingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;
}
