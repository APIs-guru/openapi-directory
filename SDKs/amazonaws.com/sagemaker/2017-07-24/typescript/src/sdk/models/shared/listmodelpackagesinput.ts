import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageTypeEnum } from "./modelpackagetypeenum";
import { ModelPackageSortByEnum } from "./modelpackagesortbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListModelPackagesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @Metadata({ data: "json, name=ModelPackageType" })
  modelPackageType?: ModelPackageTypeEnum;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ModelPackageSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
