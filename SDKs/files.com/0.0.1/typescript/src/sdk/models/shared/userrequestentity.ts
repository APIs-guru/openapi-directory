import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserRequestEntity
/** 
 * Create User Request
**/
export class UserRequestEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
