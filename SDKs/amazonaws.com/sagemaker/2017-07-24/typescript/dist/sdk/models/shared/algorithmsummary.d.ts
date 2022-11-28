import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";
/**
 * Provides summary information about an algorithm.
**/
export declare class AlgorithmSummary extends SpeakeasyBase {
    algorithmArn: string;
    algorithmDescription?: string;
    algorithmName: string;
    algorithmStatus: AlgorithmStatusEnum;
    creationTime: Date;
}
