import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortTrialComponentsByEnum } from "./sorttrialcomponentsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListTrialComponentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortTrialComponentsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;
}
