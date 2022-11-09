import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExecutionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed" })
  completed?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=received" })
  received?: Date;
}
