import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrintServerInput } from "./printserver";



// CreatePrintServerRequestInput
/** 
 * Request for adding a new print server.
**/
export class CreatePrintServerRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=printServer" })
  printServer?: PrintServerInput;
}
