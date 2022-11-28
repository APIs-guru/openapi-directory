import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";



// ServerValidationOutput
/** 
 * Contains output from validating an instance.
**/
export class ServerValidationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: Server;
}
