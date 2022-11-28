import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigInput } from "./config";



// InstanceInput
/** 
 * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ConfigInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
