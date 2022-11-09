import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResendContactReachabilityEmailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;
}
