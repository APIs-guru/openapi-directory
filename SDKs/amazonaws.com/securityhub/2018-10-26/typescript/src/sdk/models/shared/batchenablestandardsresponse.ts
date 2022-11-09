import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardsSubscription } from "./standardssubscription";


export class BatchEnableStandardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandardsSubscriptions", elemType: shared.StandardsSubscription })
  standardsSubscriptions?: StandardsSubscription[];
}
