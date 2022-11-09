import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BqmlIterationResult } from "./bqmliterationresult";


// BqmlTrainingRunTrainingOptions
/** 
 * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
**/
export class BqmlTrainingRunTrainingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=earlyStop" })
  earlyStop?: boolean;

  @Metadata({ data: "json, name=l1Reg" })
  l1Reg?: number;

  @Metadata({ data: "json, name=l2Reg" })
  l2Reg?: number;

  @Metadata({ data: "json, name=learnRate" })
  learnRate?: number;

  @Metadata({ data: "json, name=learnRateStrategy" })
  learnRateStrategy?: string;

  @Metadata({ data: "json, name=lineSearchInitLearnRate" })
  lineSearchInitLearnRate?: number;

  @Metadata({ data: "json, name=maxIteration" })
  maxIteration?: string;

  @Metadata({ data: "json, name=minRelProgress" })
  minRelProgress?: number;

  @Metadata({ data: "json, name=warmStart" })
  warmStart?: boolean;
}


export class BqmlTrainingRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=iterationResults", elemType: shared.BqmlIterationResult })
  iterationResults?: BqmlIterationResult[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=trainingOptions" })
  trainingOptions?: BqmlTrainingRunTrainingOptions;
}
