import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatusValueEnum } from "./offlinestorestatusvalueenum";
import { FeatureGroupSortByEnum } from "./featuregroupsortbyenum";
import { FeatureGroupSortOrderEnum } from "./featuregroupsortorderenum";



export class ListFeatureGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupStatusEquals" })
  featureGroupStatusEquals?: FeatureGroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OfflineStoreStatusEquals" })
  offlineStoreStatusEquals?: OfflineStoreStatusValueEnum;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: FeatureGroupSortByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: FeatureGroupSortOrderEnum;
}
