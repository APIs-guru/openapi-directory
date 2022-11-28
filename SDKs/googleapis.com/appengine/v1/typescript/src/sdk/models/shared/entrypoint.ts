import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Entrypoint
/** 
 * The entrypoint for the application.
**/
export class Entrypoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shell" })
  shell?: string;
}
