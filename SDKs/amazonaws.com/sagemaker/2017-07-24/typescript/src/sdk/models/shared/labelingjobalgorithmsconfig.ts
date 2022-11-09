import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelingJobResourceConfig } from "./labelingjobresourceconfig";


// LabelingJobAlgorithmsConfig
/** 
 * Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.
**/
export class LabelingJobAlgorithmsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialActiveLearningModelArn" })
  initialActiveLearningModelArn?: string;

  @Metadata({ data: "json, name=LabelingJobAlgorithmSpecificationArn" })
  labelingJobAlgorithmSpecificationArn: string;

  @Metadata({ data: "json, name=LabelingJobResourceConfig" })
  labelingJobResourceConfig?: LabelingJobResourceConfig;
}
