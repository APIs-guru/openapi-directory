import { SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobResourceConfig } from "./labelingjobresourceconfig";
/**
 * Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.
**/
export declare class LabelingJobAlgorithmsConfig extends SpeakeasyBase {
    initialActiveLearningModelArn?: string;
    labelingJobAlgorithmSpecificationArn: string;
    labelingJobResourceConfig?: LabelingJobResourceConfig;
}
