import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceStateNameEnum } from "./instancestatenameenum";


// InstanceState
/** 
 * The description of the current state of an instance.
**/
export class InstanceState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=name" })
  name?: InstanceStateNameEnum;
}
