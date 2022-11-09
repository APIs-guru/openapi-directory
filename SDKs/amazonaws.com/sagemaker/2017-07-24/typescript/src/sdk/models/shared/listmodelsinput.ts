import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelSortKeyEnum } from "./modelsortkeyenum";
import { OrderKeyEnum } from "./orderkeyenum";


export class ListModelsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ModelSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: OrderKeyEnum;
}
