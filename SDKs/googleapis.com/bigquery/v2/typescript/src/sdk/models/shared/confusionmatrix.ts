import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";


// ConfusionMatrix
/** 
 * Confusion matrix for multi-class classification models.
**/
export class ConfusionMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
