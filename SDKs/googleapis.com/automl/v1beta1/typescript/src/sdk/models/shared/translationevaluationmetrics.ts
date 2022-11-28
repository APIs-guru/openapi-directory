import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TranslationEvaluationMetrics
/** 
 * Evaluation metrics for the dataset.
**/
export class TranslationEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseBleuScore" })
  baseBleuScore?: number;

  @SpeakeasyMetadata({ data: "json, name=bleuScore" })
  bleuScore?: number;
}
