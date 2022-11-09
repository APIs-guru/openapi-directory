import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBatchInferenceJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchInferenceJobArn" })
  batchInferenceJobArn?: string;
}
