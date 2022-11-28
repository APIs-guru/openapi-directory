import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameServer } from "./nameserver";
import { Registrant } from "./registrant";



export class DomainDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_toggle_renew" })
  canToggleRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_date" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name_servers", elemType: NameServer })
  nameServers?: NameServer[];

  @SpeakeasyMetadata({ data: "json, name=registrant" })
  registrant?: Registrant;

  @SpeakeasyMetadata({ data: "json, name=will_renew" })
  willRenew?: boolean;
}
