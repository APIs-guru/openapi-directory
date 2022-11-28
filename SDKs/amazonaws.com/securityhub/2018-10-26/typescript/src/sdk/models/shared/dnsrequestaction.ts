import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsRequestAction
/** 
 * Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected.
**/
export class DnsRequestAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;
}
