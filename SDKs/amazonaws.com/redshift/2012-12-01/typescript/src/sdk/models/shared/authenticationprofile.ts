import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthenticationProfile
/** 
 * Describes an authentication profile.
**/
export class AuthenticationProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationProfileContent?: string;

  @SpeakeasyMetadata()
  authenticationProfileName?: string;
}
