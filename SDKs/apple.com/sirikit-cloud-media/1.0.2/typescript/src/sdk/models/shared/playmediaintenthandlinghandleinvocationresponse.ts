import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionMetrics } from "./executionmetrics";



export class PlayMediaIntentHandlingHandleInvocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: ExecutionMetrics;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: Map<string, any>;
}
