import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendContactReachabilityEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;
}
