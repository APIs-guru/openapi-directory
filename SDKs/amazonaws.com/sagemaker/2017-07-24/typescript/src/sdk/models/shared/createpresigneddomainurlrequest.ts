import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePresignedDomainUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=ExpiresInSeconds" })
  expiresInSeconds?: number;

  @Metadata({ data: "json, name=SessionExpirationDurationInSeconds" })
  sessionExpirationDurationInSeconds?: number;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
