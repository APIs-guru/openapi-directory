import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfusionMatrix } from "./confusionmatrix";


// TextSentimentEvaluationMetrics
/** 
 * Model evaluation metrics for text sentiment problems.
**/
export class TextSentimentEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string[];

  @Metadata({ data: "json, name=confusionMatrix" })
  confusionMatrix?: ConfusionMatrix;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=linearKappa" })
  linearKappa?: number;

  @Metadata({ data: "json, name=meanAbsoluteError" })
  meanAbsoluteError?: number;

  @Metadata({ data: "json, name=meanSquaredError" })
  meanSquaredError?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=quadraticKappa" })
  quadraticKappa?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;
}
