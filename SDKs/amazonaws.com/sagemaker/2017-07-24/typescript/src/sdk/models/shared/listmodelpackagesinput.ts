import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageTypeEnum } from "./modelpackagetypeenum";
import { ModelPackageSortByEnum } from "./modelpackagesortbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListModelPackagesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageType" })
  modelPackageType?: ModelPackageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: ModelPackageSortByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
