import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateNameEnum } from "./instancestatenameenum";



// InstanceState
/** 
 * The description of the current state of an instance.
**/
export class InstanceState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: InstanceStateNameEnum;
}
