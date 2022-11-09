import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableReference } from "./tablereference";
import { TableReference } from "./tablereference";
import { TableReference } from "./tablereference";


// DataSplitResult
/** 
 * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
**/
export class DataSplitResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluationTable" })
  evaluationTable?: TableReference;

  @Metadata({ data: "json, name=testTable" })
  testTable?: TableReference;

  @Metadata({ data: "json, name=trainingTable" })
  trainingTable?: TableReference;
}
