import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoleGroup
/** 
 * Group information
**/
export class RoleGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isMember" })
  isMember: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
