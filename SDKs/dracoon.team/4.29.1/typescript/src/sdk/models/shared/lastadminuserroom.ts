import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LastAdminUserRoom
/** 
 * Room information
**/
export class LastAdminUserRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=lastAdminInGroup" })
  lastAdminInGroup: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastAdminInGroupId" })
  lastAdminInGroupId?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=parentPath" })
  parentPath: string;
}
