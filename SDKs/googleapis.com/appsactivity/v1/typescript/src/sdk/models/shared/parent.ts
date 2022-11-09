import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Parent
/** 
 * Contains information about a parent object. For example, a folder in Drive is a parent for all files within it.
**/
export class Parent extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isRoot" })
  isRoot?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
