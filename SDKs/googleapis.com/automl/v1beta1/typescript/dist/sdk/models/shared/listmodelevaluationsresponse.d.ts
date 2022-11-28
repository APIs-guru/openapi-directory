import { SpeakeasyBase } from "../../../internal/utils";
import { ModelEvaluation } from "./modelevaluation";
/**
 * Response message for AutoMl.ListModelEvaluations.
**/
export declare class ListModelEvaluationsResponse extends SpeakeasyBase {
    modelEvaluation?: ModelEvaluation[];
    nextPageToken?: string;
}
