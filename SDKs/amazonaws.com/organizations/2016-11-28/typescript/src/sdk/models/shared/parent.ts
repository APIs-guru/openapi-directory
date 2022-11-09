import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParentTypeEnum } from "./parenttypeenum";


// Parent
/** 
 * Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
**/
export class Parent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ParentTypeEnum;
}
