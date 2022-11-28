import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationProfile } from "./authenticationprofile";



export class DescribeAuthenticationProfilesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AuthenticationProfile })
  authenticationProfiles?: AuthenticationProfile[];
}
