import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusItem } from "./algorithmstatusitem";
/**
 * Specifies the validation and image scan statuses of the algorithm.
**/
export declare class AlgorithmStatusDetails extends SpeakeasyBase {
    imageScanStatuses?: AlgorithmStatusItem[];
    validationStatuses?: AlgorithmStatusItem[];
}
