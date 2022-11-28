import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchAppAction
/** 
 * An action to launch an app.
**/
export class LaunchAppAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
