import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";


// ModelPackageSummary
/** 
 * Provides summary information about a model package.
**/
export class ModelPackageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @Metadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;

  @Metadata({ data: "json, name=ModelPackageDescription" })
  modelPackageDescription?: string;

  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @Metadata({ data: "json, name=ModelPackageName" })
  modelPackageName: string;

  @Metadata({ data: "json, name=ModelPackageStatus" })
  modelPackageStatus: ModelPackageStatusEnum;

  @Metadata({ data: "json, name=ModelPackageVersion" })
  modelPackageVersion?: number;
}
