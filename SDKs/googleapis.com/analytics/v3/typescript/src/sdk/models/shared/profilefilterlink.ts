import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterRef } from "./filterref";
import { ProfileRef } from "./profileref";


// ProfileFilterLink
/** 
 * JSON template for an Analytics profile filter link.
**/
export class ProfileFilterLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterRef" })
  filterRef?: FilterRef;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profileRef" })
  profileRef?: ProfileRef;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
