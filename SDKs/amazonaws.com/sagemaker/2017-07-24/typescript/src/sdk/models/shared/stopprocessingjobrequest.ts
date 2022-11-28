import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopProcessingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;
}
