import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SavedView
/** 
 * A saved view of a table. NextId: 3
**/
export class SavedView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
