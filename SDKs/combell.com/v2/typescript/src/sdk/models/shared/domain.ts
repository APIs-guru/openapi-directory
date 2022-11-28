import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_date" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=will_renew" })
  willRenew?: boolean;
}
