import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardsSubscription } from "./standardssubscription";


export class GetEnabledStandardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StandardsSubscriptions", elemType: shared.StandardsSubscription })
  standardsSubscriptions?: StandardsSubscription[];
}
