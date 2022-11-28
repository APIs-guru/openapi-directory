import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProcessingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;
}
