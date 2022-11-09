import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProcessingJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn: string;
}
