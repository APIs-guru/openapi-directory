import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringJobDefinitionSortKeyEnum } from "./monitoringjobdefinitionsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListModelBiasJobDefinitionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: MonitoringJobDefinitionSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
