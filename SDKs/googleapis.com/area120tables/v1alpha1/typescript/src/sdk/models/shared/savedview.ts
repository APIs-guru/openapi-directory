import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SavedView
/** 
 * A saved view of a table. NextId: 3
**/
export class SavedView extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
