import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeBatchInferenceJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchInferenceJobArn" })
  batchInferenceJobArn: string;
}
