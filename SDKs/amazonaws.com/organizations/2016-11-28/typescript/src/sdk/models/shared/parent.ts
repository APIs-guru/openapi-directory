import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParentTypeEnum } from "./parenttypeenum";



// Parent
/** 
 * Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
**/
export class Parent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ParentTypeEnum;
}
