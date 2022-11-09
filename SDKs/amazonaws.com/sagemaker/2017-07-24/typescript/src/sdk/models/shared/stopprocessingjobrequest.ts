import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopProcessingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;
}
