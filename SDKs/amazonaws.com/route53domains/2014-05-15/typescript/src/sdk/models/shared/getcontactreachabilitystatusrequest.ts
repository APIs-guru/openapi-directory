import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactReachabilityStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;
}
