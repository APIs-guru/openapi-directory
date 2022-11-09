import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactReachabilityStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;
}
