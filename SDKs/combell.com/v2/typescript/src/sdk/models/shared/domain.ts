import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=expiration_date" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=will_renew" })
  willRenew?: boolean;
}
