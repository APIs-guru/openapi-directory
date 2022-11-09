import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionMetrics } from "./executionmetrics";


export class AddMediaIntentHandlingResolveMediaItemsInvocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debug" })
  debug?: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: ExecutionMetrics;

  @Metadata({ data: "json, name=result" })
  result: Map<string, any>;
}
