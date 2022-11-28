import { SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";
/**
 * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
**/
export declare class DataSplitResult extends SpeakeasyBase {
    evaluationTable?: TableReference;
    testTable?: TableReference;
    trainingTable?: TableReference;
}
