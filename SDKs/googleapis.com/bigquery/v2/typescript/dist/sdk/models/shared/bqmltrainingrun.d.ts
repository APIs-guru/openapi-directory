import { SpeakeasyBase } from "../../../internal/utils";
import { BqmlIterationResult } from "./bqmliterationresult";
/**
 * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
**/
export declare class BqmlTrainingRunTrainingOptions extends SpeakeasyBase {
    earlyStop?: boolean;
    l1Reg?: number;
    l2Reg?: number;
    learnRate?: number;
    learnRateStrategy?: string;
    lineSearchInitLearnRate?: number;
    maxIteration?: string;
    minRelProgress?: number;
    warmStart?: boolean;
}
export declare class BqmlTrainingRun extends SpeakeasyBase {
    iterationResults?: BqmlIterationResult[];
    startTime?: Date;
    state?: string;
    trainingOptions?: BqmlTrainingRunTrainingOptions;
}
