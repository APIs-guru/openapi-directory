import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchInferenceJobConfig } from "./batchinferencejobconfig";
import { BatchInferenceJobInput } from "./batchinferencejobinput";
import { BatchInferenceJobOutput } from "./batchinferencejoboutput";


export class CreateBatchInferenceJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchInferenceJobConfig" })
  batchInferenceJobConfig?: BatchInferenceJobConfig;

  @Metadata({ data: "json, name=filterArn" })
  filterArn?: string;

  @Metadata({ data: "json, name=jobInput" })
  jobInput: BatchInferenceJobInput;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;

  @Metadata({ data: "json, name=jobOutput" })
  jobOutput: BatchInferenceJobOutput;

  @Metadata({ data: "json, name=numResults" })
  numResults?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn: string;
}
