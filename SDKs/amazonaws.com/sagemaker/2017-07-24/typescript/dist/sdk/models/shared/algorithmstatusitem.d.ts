import { SpeakeasyBase } from "../../../internal/utils";
import { DetailedAlgorithmStatusEnum } from "./detailedalgorithmstatusenum";
/**
 * Represents the overall status of an algorithm.
**/
export declare class AlgorithmStatusItem extends SpeakeasyBase {
    failureReason?: string;
    name: string;
    status: DetailedAlgorithmStatusEnum;
}
