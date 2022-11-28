import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExecutionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=received" })
  received?: Date;
}
