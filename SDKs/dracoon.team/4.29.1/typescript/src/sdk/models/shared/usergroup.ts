import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserGroup
/** 
 * Group information
**/
export class UserGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isMember" })
  isMember: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;
}
