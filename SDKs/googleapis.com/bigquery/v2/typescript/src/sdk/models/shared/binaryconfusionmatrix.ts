import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BinaryConfusionMatrix
/** 
 * Confusion matrix for binary classification models.
**/
export class BinaryConfusionMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=falseNegatives" })
  falseNegatives?: string;

  @SpeakeasyMetadata({ data: "json, name=falsePositives" })
  falsePositives?: string;

  @SpeakeasyMetadata({ data: "json, name=positiveClassThreshold" })
  positiveClassThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=trueNegatives" })
  trueNegatives?: string;

  @SpeakeasyMetadata({ data: "json, name=truePositives" })
  truePositives?: string;
}
