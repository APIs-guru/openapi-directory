import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { Tag } from "./tag";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";



export class CreateModelPackageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelMetrics" })
  modelMetrics?: ModelMetrics;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageDescription" })
  modelPackageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageName" })
  modelPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceAlgorithmSpecification" })
  sourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: ModelPackageValidationSpecification;
}
