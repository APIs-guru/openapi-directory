import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
/**
 * Summary information about a model group.
**/
export declare class ModelPackageGroupSummary extends SpeakeasyBase {
    creationTime: Date;
    modelPackageGroupArn: string;
    modelPackageGroupDescription?: string;
    modelPackageGroupName: string;
    modelPackageGroupStatus: ModelPackageGroupStatusEnum;
}
