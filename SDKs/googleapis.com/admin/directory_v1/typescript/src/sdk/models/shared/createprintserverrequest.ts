import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrintServer } from "./printserver";


// CreatePrintServerRequest
/** 
 * Request for adding a new print server.
**/
export class CreatePrintServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=printServer" })
  printServer?: PrintServer;
}
