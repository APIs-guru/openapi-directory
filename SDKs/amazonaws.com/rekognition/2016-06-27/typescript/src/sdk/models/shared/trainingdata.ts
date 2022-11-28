import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



// TrainingData
/** 
 * The dataset used for training.
**/
export class TrainingData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Assets", elemType: Asset })
  assets?: Asset[];
}
