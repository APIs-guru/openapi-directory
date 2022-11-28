import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatusValueEnum } from "./offlinestorestatusvalueenum";
import { FeatureGroupSortByEnum } from "./featuregroupsortbyenum";
import { FeatureGroupSortOrderEnum } from "./featuregroupsortorderenum";
export declare class ListFeatureGroupsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    featureGroupStatusEquals?: FeatureGroupStatusEnum;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    offlineStoreStatusEquals?: OfflineStoreStatusValueEnum;
    sortBy?: FeatureGroupSortByEnum;
    sortOrder?: FeatureGroupSortOrderEnum;
}
