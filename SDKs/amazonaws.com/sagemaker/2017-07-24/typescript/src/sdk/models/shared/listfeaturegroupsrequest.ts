import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatusValueEnum } from "./offlinestorestatusvalueenum";
import { FeatureGroupSortByEnum } from "./featuregroupsortbyenum";
import { FeatureGroupSortOrderEnum } from "./featuregroupsortorderenum";


export class ListFeatureGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=FeatureGroupStatusEquals" })
  featureGroupStatusEquals?: FeatureGroupStatusEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OfflineStoreStatusEquals" })
  offlineStoreStatusEquals?: OfflineStoreStatusValueEnum;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: FeatureGroupSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: FeatureGroupSortOrderEnum;
}
