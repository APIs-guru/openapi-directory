import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
import { ModelPackageStatusDetails } from "./modelpackagestatusdetails";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { Tag } from "./tag";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";



// ModelPackage
/** 
 * A versioned model that can be deployed for SageMaker inference.
**/
export class ModelPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovalDescription" })
  approvalDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelMetrics" })
  modelMetrics?: ModelMetrics;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageArn" })
  modelPackageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageDescription" })
  modelPackageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageName" })
  modelPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageStatus" })
  modelPackageStatus?: ModelPackageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageStatusDetails" })
  modelPackageStatusDetails?: ModelPackageStatusDetails;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageVersion" })
  modelPackageVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceAlgorithmSpecification" })
  sourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: ModelPackageValidationSpecification;
}
