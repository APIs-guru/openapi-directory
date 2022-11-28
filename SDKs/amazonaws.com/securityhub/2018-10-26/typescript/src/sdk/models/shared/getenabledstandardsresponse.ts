import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardsSubscription } from "./standardssubscription";



export class GetEnabledStandardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardsSubscriptions", elemType: StandardsSubscription })
  standardsSubscriptions?: StandardsSubscription[];
}
