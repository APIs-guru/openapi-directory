import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Parent
/** 
 * Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
**/
export class Parent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isRoot" })
  isRoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
