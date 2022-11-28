import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IterationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationMs" })
  durationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=evalLoss" })
  evalLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=learnRate" })
  learnRate?: number;

  @SpeakeasyMetadata({ data: "json, name=trainingLoss" })
  trainingLoss?: number;
}
