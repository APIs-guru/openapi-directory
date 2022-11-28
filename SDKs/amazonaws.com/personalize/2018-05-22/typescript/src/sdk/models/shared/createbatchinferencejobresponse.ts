import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBatchInferenceJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchInferenceJobArn" })
  batchInferenceJobArn?: string;
}
