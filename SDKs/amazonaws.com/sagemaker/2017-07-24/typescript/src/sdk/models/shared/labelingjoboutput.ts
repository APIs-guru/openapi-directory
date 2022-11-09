import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelingJobOutput
/** 
 * Specifies the location of the output produced by the labeling job. 
**/
export class LabelingJobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinalActiveLearningModelArn" })
  finalActiveLearningModelArn?: string;

  @Metadata({ data: "json, name=OutputDatasetS3Uri" })
  outputDatasetS3Uri: string;
}
