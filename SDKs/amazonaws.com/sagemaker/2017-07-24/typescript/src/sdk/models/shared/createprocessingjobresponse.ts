import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProcessingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn: string;
}
