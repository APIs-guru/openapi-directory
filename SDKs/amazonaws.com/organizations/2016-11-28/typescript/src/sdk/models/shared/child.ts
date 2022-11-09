import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildTypeEnum } from "./childtypeenum";


// Child
/** 
 * Contains a list of child entities, either OUs or accounts.
**/
export class Child extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ChildTypeEnum;
}
