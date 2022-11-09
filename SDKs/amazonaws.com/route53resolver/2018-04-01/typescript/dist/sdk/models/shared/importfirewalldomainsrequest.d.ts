import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainImportOperationEnum } from "./firewalldomainimportoperationenum";
export declare class ImportFirewallDomainsRequest extends SpeakeasyBase {
    domainFileUrl: string;
    firewallDomainListId: string;
    operation: FirewallDomainImportOperationEnum;
}
