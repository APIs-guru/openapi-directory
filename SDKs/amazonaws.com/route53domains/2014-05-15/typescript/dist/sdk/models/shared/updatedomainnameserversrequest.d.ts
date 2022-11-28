import { SpeakeasyBase } from "../../../internal/utils";
import { Nameserver } from "./nameserver";
/**
 * <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
**/
export declare class UpdateDomainNameserversRequest extends SpeakeasyBase {
    domainName: string;
    fiAuthKey?: string;
    nameservers: Nameserver[];
}
