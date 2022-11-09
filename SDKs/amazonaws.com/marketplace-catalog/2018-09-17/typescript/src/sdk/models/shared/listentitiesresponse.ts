import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntitySummary } from "./entitysummary";


export class ListEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntitySummaryList", elemType: shared.EntitySummary })
  entitySummaryList?: EntitySummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
