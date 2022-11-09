import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LaunchAppAction
/** 
 * An action to launch an app.
**/
export class LaunchAppAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}
