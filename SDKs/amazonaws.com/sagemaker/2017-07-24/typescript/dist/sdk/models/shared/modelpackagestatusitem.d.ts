import { SpeakeasyBase } from "../../../internal/utils";
import { DetailedModelPackageStatusEnum } from "./detailedmodelpackagestatusenum";
/**
 * Represents the overall status of a model package.
**/
export declare class ModelPackageStatusItem extends SpeakeasyBase {
    failureReason?: string;
    name: string;
    status: DetailedModelPackageStatusEnum;
}
