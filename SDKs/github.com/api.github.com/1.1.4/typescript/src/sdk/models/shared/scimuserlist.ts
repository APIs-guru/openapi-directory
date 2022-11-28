import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScimUser } from "./scimuser";



// ScimUserList
/** 
 * SCIM User List
**/
export class ScimUserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: ScimUser })
  resources: ScimUser[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage: number;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}
