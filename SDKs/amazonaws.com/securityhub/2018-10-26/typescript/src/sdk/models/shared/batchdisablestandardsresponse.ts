import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardsSubscription } from "./standardssubscription";


export class BatchDisableStandardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandardsSubscriptions", elemType: shared.StandardsSubscription })
  standardsSubscriptions?: StandardsSubscription[];
}
