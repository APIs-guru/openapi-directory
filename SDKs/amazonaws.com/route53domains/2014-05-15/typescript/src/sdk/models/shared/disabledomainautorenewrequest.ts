import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableDomainAutoRenewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
