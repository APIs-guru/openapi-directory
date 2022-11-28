import { SpeakeasyBase } from "../../../internal/utils";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
/**
 * Provides summary information about a model package.
**/
export declare class ModelPackageSummary extends SpeakeasyBase {
    creationTime: Date;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelPackageArn: string;
    modelPackageDescription?: string;
    modelPackageGroupName?: string;
    modelPackageName: string;
    modelPackageStatus: ModelPackageStatusEnum;
    modelPackageVersion?: number;
}
