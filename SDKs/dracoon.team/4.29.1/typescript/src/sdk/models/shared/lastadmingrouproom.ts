import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LastAdminGroupRoom
/** 
 * Room information
**/
export class LastAdminGroupRoom extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=parentPath" })
  parentPath: string;
}
