import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { Tag } from "./tag";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";


export class CreateModelPackageInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertifyForMarketplace" })
  certifyForMarketplace?: boolean;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=InferenceSpecification" })
  inferenceSpecification?: InferenceSpecification;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=ModelApprovalStatus" })
  modelApprovalStatus?: ModelApprovalStatusEnum;

  @Metadata({ data: "json, name=ModelMetrics" })
  modelMetrics?: ModelMetrics;

  @Metadata({ data: "json, name=ModelPackageDescription" })
  modelPackageDescription?: string;

  @Metadata({ data: "json, name=ModelPackageGroupName" })
  modelPackageGroupName?: string;

  @Metadata({ data: "json, name=ModelPackageName" })
  modelPackageName?: string;

  @Metadata({ data: "json, name=SourceAlgorithmSpecification" })
  sourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=ValidationSpecification" })
  validationSpecification?: ModelPackageValidationSpecification;
}
