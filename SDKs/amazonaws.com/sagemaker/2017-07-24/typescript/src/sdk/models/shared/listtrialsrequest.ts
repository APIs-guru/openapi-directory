import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortTrialsByEnum } from "./sorttrialsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListTrialsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortTrialsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;
}
