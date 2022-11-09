import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameServer } from "./nameserver";
import { Registrant } from "./registrant";


export class DomainDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_toggle_renew" })
  canToggleRenew?: boolean;

  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=expiration_date" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=name_servers", elemType: shared.NameServer })
  nameServers?: NameServer[];

  @Metadata({ data: "json, name=registrant" })
  registrant?: Registrant;

  @Metadata({ data: "json, name=will_renew" })
  willRenew?: boolean;
}
