import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TranslationEvaluationMetrics
/** 
 * Evaluation metrics for the dataset.
**/
export class TranslationEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseBleuScore" })
  baseBleuScore?: number;

  @Metadata({ data: "json, name=bleuScore" })
  bleuScore?: number;
}
