import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScimUser } from "./scimuser";


// ScimUserList
/** 
 * SCIM User List
**/
export class ScimUserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.ScimUser })
  resources: ScimUser[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage: number;

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];

  @Metadata({ data: "json, name=startIndex" })
  startIndex: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults: number;
}
