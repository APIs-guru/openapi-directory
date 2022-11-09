import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroundTruthManifest } from "./groundtruthmanifest";


// Asset
/** 
 * Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training. 
**/
export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroundTruthManifest" })
  groundTruthManifest?: GroundTruthManifest;
}
