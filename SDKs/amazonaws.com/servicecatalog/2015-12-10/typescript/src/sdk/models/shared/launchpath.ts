import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchPath
/** 
 * A launch path object.
**/
export class LaunchPath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
