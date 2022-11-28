import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePresignedDomainUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=ExpiresInSeconds" })
  expiresInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=SessionExpirationDurationInSeconds" })
  sessionExpirationDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
