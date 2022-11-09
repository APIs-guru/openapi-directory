import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelEvaluation } from "./modelevaluation";


// ListModelEvaluationsResponse
/** 
 * Response message for AutoMl.ListModelEvaluations.
**/
export class ListModelEvaluationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelEvaluation", elemType: shared.ModelEvaluation })
  modelEvaluation?: ModelEvaluation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
