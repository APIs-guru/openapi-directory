import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BinaryConfusionMatrix
/** 
 * Confusion matrix for binary classification models.
**/
export class BinaryConfusionMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=falseNegatives" })
  falseNegatives?: string;

  @Metadata({ data: "json, name=falsePositives" })
  falsePositives?: string;

  @Metadata({ data: "json, name=positiveClassThreshold" })
  positiveClassThreshold?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;

  @Metadata({ data: "json, name=trueNegatives" })
  trueNegatives?: string;

  @Metadata({ data: "json, name=truePositives" })
  truePositives?: string;
}
