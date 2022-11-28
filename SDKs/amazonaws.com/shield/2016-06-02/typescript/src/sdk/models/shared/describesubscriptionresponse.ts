import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";



export class DescribeSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Subscription" })
  subscription?: Subscription;
}
