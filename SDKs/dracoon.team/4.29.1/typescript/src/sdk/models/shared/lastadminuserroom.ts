import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LastAdminUserRoom
/** 
 * Room information
**/
export class LastAdminUserRoom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=lastAdminInGroup" })
  lastAdminInGroup: boolean;

  @Metadata({ data: "json, name=lastAdminInGroupId" })
  lastAdminInGroupId?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=parentPath" })
  parentPath: string;
}
