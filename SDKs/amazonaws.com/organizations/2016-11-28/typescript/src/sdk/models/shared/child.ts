import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildTypeEnum } from "./childtypeenum";



// Child
/** 
 * Contains a list of child entities, either OUs or accounts.
**/
export class Child extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ChildTypeEnum;
}
