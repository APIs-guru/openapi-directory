import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuppressionListImportActionEnum } from "./suppressionlistimportactionenum";


// SuppressionListDestination
/** 
 * An object that contains details about the action of suppression list.
**/
export class SuppressionListDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuppressionListImportAction" })
  suppressionListImportAction: SuppressionListImportActionEnum;
}
