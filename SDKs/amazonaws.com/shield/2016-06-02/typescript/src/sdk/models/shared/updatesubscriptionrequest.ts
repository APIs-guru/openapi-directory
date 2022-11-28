import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewEnum } from "./autorenewenum";



export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoRenew" })
  autoRenew?: AutoRenewEnum;
}
