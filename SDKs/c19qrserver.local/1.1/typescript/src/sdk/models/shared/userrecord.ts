import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserRecord
/** 
 * A team member user record
**/
export class UserRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;
}
