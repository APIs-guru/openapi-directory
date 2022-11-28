import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelEvaluation } from "./modelevaluation";



// ListModelEvaluationsResponse
/** 
 * Response message for AutoMl.ListModelEvaluations.
**/
export class ListModelEvaluationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelEvaluation", elemType: ModelEvaluation })
  modelEvaluation?: ModelEvaluation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
