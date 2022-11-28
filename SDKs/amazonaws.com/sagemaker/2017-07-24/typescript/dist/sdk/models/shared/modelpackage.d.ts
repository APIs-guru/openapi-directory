import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A versioned model that can be deployed for SageMaker inference.
**/
export declare class ModelPackage extends SpeakeasyBase {
    approvalDescription?: string;
    certifyForMarketplace?: boolean;
    createdBy?: UserContext;
    creationTime?: Date;
    inferenceSpecification?: InferenceSpecification;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelMetrics?: ModelMetrics;
    modelPackageArn?: string;
    modelPackageDescription?: string;
    modelPackageGroupName?: string;
    modelPackageName?: string;
    modelPackageStatus?: ModelPackageStatusEnum;
    modelPackageStatusDetails?: ModelPackageStatusDetails;
    modelPackageVersion?: number;
    sourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    tags?: Tag[];
    validationSpecification?: ModelPackageValidationSpecification;
}
