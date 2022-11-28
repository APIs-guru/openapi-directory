import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListImportActionEnum } from "./suppressionlistimportactionenum";



// SuppressionListDestination
/** 
 * An object that contains details about the action of suppression list.
**/
export class SuppressionListDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuppressionListImportAction" })
  suppressionListImportAction: SuppressionListImportActionEnum;
}
