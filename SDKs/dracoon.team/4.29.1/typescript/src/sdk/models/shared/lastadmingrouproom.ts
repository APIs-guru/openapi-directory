import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LastAdminGroupRoom
/** 
 * Room information
**/
export class LastAdminGroupRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=parentPath" })
  parentPath: string;
}
