import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyAuthenticationProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationProfileContent?: string;

  @SpeakeasyMetadata()
  authenticationProfileName?: string;
}
