import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BqmlIterationResult } from "./bqmliterationresult";



// BqmlTrainingRunTrainingOptions
/** 
 * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
**/
export class BqmlTrainingRunTrainingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=earlyStop" })
  earlyStop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=l1Reg" })
  l1Reg?: number;

  @SpeakeasyMetadata({ data: "json, name=l2Reg" })
  l2Reg?: number;

  @SpeakeasyMetadata({ data: "json, name=learnRate" })
  learnRate?: number;

  @SpeakeasyMetadata({ data: "json, name=learnRateStrategy" })
  learnRateStrategy?: string;

  @SpeakeasyMetadata({ data: "json, name=lineSearchInitLearnRate" })
  lineSearchInitLearnRate?: number;

  @SpeakeasyMetadata({ data: "json, name=maxIteration" })
  maxIteration?: string;

  @SpeakeasyMetadata({ data: "json, name=minRelProgress" })
  minRelProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=warmStart" })
  warmStart?: boolean;
}


export class BqmlTrainingRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iterationResults", elemType: BqmlIterationResult })
  iterationResults?: BqmlIterationResult[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingOptions" })
  trainingOptions?: BqmlTrainingRunTrainingOptions;
}
