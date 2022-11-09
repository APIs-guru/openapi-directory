import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";


// ServerValidationOutput
/** 
 * Contains output from validating an instance.
**/
export class ServerValidationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: Server;
}
