import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";



// DataSplitResult
/** 
 * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
**/
export class DataSplitResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluationTable" })
  evaluationTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=testTable" })
  testTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=trainingTable" })
  trainingTable?: TableReference;
}
