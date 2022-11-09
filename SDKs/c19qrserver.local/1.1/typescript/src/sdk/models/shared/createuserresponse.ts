import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateUserResponse
/** 
 * The object that's returned when a user record is created.
**/
export class CreateUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=guid" })
  guid?: string;
}
