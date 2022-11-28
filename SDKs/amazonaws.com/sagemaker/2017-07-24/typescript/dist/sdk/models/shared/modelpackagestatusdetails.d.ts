import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageStatusItem } from "./modelpackagestatusitem";
/**
 * Specifies the validation and image scan statuses of the model package.
**/
export declare class ModelPackageStatusDetails extends SpeakeasyBase {
    imageScanStatuses?: ModelPackageStatusItem[];
    validationStatuses: ModelPackageStatusItem[];
}
