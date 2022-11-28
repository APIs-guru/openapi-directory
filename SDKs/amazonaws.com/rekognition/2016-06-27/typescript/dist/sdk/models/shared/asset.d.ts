import { SpeakeasyBase } from "../../../internal/utils";
import { GroundTruthManifest } from "./groundtruthmanifest";
/**
 * Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training.
**/
export declare class Asset extends SpeakeasyBase {
    groundTruthManifest?: GroundTruthManifest;
}
