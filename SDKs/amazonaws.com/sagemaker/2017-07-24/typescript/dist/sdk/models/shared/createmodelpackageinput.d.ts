import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { Tag } from "./tag";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";
export declare class CreateModelPackageInput extends SpeakeasyBase {
    certifyForMarketplace?: boolean;
    clientToken?: string;
    inferenceSpecification?: InferenceSpecification;
    metadataProperties?: MetadataProperties;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelMetrics?: ModelMetrics;
    modelPackageDescription?: string;
    modelPackageGroupName?: string;
    modelPackageName?: string;
    sourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    tags?: Tag[];
    validationSpecification?: ModelPackageValidationSpecification;
}
