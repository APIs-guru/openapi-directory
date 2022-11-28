import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingJobOutput
/** 
 * Specifies the location of the output produced by the labeling job. 
**/
export class LabelingJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinalActiveLearningModelArn" })
  finalActiveLearningModelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDatasetS3Uri" })
  outputDatasetS3Uri: string;
}
