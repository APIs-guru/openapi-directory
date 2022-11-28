import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitySummary } from "./entitysummary";



export class ListEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntitySummaryList", elemType: EntitySummary })
  entitySummaryList?: EntitySummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
