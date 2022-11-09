import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserRef
/** 
 * JSON template for a user reference.
**/
export class UserRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
