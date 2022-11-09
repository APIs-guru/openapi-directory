import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsRequestAction
/** 
 * Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected.
**/
export class DnsRequestAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;
}
