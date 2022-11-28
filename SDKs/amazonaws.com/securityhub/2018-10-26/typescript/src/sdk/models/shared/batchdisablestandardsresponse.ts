import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardsSubscription } from "./standardssubscription";



export class BatchDisableStandardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StandardsSubscriptions", elemType: StandardsSubscription })
  standardsSubscriptions?: StandardsSubscription[];
}
