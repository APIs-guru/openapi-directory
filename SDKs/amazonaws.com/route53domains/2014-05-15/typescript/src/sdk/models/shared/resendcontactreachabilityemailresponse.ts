import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResendContactReachabilityEmailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=isAlreadyVerified" })
  isAlreadyVerified?: boolean;
}
