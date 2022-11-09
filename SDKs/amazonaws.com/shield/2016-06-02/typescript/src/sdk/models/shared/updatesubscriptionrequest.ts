import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoRenewEnum } from "./autorenewenum";


export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoRenew" })
  autoRenew?: AutoRenewEnum;
}
