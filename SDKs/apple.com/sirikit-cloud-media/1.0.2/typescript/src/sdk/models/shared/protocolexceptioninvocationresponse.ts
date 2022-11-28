import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolException } from "./protocolexception";
import { ExecutionMetrics } from "./executionmetrics";



export class ProtocolExceptionInvocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: string;

  @SpeakeasyMetadata({ data: "json, name=exception" })
  exception: ProtocolException;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: ExecutionMetrics;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: Map<string, any>;
}
