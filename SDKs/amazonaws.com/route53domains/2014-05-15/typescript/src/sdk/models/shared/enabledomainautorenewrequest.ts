import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableDomainAutoRenewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
