import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJobConfig } from "./batchinferencejobconfig";
import { BatchInferenceJobInput } from "./batchinferencejobinput";
import { BatchInferenceJobOutput } from "./batchinferencejoboutput";



export class CreateBatchInferenceJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchInferenceJobConfig" })
  batchInferenceJobConfig?: BatchInferenceJobConfig;

  @SpeakeasyMetadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobInput" })
  jobInput: BatchInferenceJobInput;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=jobOutput" })
  jobOutput: BatchInferenceJobOutput;

  @SpeakeasyMetadata({ data: "json, name=numResults" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
