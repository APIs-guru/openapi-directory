import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendContactReachabilityEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=isAlreadyVerified" })
  isAlreadyVerified?: boolean;
}
