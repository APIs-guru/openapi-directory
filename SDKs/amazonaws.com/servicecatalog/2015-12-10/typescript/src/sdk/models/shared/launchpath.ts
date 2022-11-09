import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LaunchPath
/** 
 * A launch path object.
**/
export class LaunchPath extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
