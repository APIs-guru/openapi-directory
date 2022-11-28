import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";



// ModelPackageSummary
/** 
 * Provides summary information about a model package.
**/
export class ModelPackageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageDescription" })
  modelPackageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageName" })
  modelPackageName: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageStatus" })
  modelPackageStatus: ModelPackageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageVersion" })
  modelPackageVersion?: number;
}
