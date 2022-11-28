import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfusionMatrix } from "./confusionmatrix";



// TextSentimentEvaluationMetrics
/** 
 * Model evaluation metrics for text sentiment problems.
**/
export class TextSentimentEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string[];

  @SpeakeasyMetadata({ data: "json, name=confusionMatrix" })
  confusionMatrix?: ConfusionMatrix;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=linearKappa" })
  linearKappa?: number;

  @SpeakeasyMetadata({ data: "json, name=meanAbsoluteError" })
  meanAbsoluteError?: number;

  @SpeakeasyMetadata({ data: "json, name=meanSquaredError" })
  meanSquaredError?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=quadraticKappa" })
  quadraticKappa?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;
}
