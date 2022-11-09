import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Subscription } from "./subscription";


export class DescribeSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Subscription" })
  subscription?: Subscription;
}
