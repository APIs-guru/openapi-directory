import { SpeakeasyBase } from "../../../internal/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageTypeEnum } from "./modelpackagetypeenum";
import { ModelPackageSortByEnum } from "./modelpackagesortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListModelPackagesInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelPackageGroupName?: string;
    modelPackageType?: ModelPackageTypeEnum;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ModelPackageSortByEnum;
    sortOrder?: SortOrderEnum;
}
