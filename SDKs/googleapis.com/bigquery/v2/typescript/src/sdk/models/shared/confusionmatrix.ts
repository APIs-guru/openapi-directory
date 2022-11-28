import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";



// ConfusionMatrix
/** 
 * Confusion matrix for multi-class classification models.
**/
export class ConfusionMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
