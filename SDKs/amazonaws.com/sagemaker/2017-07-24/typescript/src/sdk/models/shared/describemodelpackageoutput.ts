import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { InferenceSpecification } from "./inferencespecification";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
import { ModelPackageStatusDetails } from "./modelpackagestatusdetails";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";


export class DescribeModelPackageOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApprovalDescription" })
  approvalDescription?: string;

  @Metadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @Metadata({ data: "json, name=ModelMetrics" })
  modelMetrics?: ModelMetrics;

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

  @Metadata({ data: "json, name=ModelPackageStatusDetails" })
  modelPackageStatusDetails: ModelPackageStatusDetails;

  @Metadata({ data: "json, name=ModelPackageVersion" })
  modelPackageVersion?: number;

  @Metadata({ data: "json, name=SourceAlgorithmSpecification" })
  sourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  @Metadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: ModelPackageValidationSpecification;
}
