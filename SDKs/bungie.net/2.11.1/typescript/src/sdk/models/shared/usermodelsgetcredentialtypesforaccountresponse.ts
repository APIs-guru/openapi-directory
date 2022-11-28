import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserModelsGetCredentialTypesForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentialAsString?: string;

  @SpeakeasyMetadata()
  credentialDisplayName?: string;

  @SpeakeasyMetadata()
  credentialType?: number;

  @SpeakeasyMetadata()
  isPublic?: boolean;
}
