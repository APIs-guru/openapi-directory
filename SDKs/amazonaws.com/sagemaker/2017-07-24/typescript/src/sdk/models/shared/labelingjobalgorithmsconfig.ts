import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobResourceConfig } from "./labelingjobresourceconfig";



// LabelingJobAlgorithmsConfig
/** 
 * Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.
**/
export class LabelingJobAlgorithmsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialActiveLearningModelArn" })
  initialActiveLearningModelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobAlgorithmSpecificationArn" })
  labelingJobAlgorithmSpecificationArn: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobResourceConfig" })
  labelingJobResourceConfig?: LabelingJobResourceConfig;
}
