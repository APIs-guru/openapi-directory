import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";


// TrainingData
/** 
 * The dataset used for training.
**/
export class TrainingData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Assets", elemType: shared.Asset })
  assets?: Asset[];
}
