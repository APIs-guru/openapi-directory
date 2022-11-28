import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthenticationProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationProfileContent?: string;

  @SpeakeasyMetadata()
  authenticationProfileName?: string;
}
