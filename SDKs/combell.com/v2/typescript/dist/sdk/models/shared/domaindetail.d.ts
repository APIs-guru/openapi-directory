import { SpeakeasyBase } from "../../../internal/utils";
import { NameServer } from "./nameserver";
import { Registrant } from "./registrant";
export declare class DomainDetail extends SpeakeasyBase {
    canToggleRenew?: boolean;
    domainName?: string;
    expirationDate?: Date;
    nameServers?: NameServer[];
    registrant?: Registrant;
    willRenew?: boolean;
}
