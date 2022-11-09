import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BqmlIterationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationMs" })
  durationMs?: string;

  @Metadata({ data: "json, name=evalLoss" })
  evalLoss?: number;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=learnRate" })
  learnRate?: number;

  @Metadata({ data: "json, name=trainingLoss" })
  trainingLoss?: number;
}
