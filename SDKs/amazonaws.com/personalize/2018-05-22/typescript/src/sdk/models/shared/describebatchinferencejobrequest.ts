import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeBatchInferenceJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchInferenceJobArn" })
  batchInferenceJobArn: string;
}
