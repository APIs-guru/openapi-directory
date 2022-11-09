import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EditDomainWillRenewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=will_renew" })
  willRenew?: boolean;
}
