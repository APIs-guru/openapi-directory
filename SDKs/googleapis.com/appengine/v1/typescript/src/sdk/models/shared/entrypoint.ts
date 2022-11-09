import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entrypoint
/** 
 * The entrypoint for the application.
**/
export class Entrypoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=shell" })
  shell?: string;
}
