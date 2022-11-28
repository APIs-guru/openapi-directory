import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateUserResponse
/** 
 * The object that's returned when a user record is created.
**/
export class CreateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=guid" })
  guid?: string;
}
