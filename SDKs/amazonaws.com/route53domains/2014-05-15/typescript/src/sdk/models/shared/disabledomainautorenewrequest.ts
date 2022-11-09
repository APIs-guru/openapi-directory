import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisableDomainAutoRenewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
