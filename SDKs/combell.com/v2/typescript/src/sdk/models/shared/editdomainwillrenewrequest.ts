import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EditDomainWillRenewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=will_renew" })
  willRenew?: boolean;
}
