import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtocolException } from "./protocolexception";
import { ExecutionMetrics } from "./executionmetrics";


export class ProtocolExceptionInvocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debug" })
  debug?: string;

  @Metadata({ data: "json, name=exception" })
  exception: ProtocolException;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: ExecutionMetrics;

  @Metadata({ data: "json, name=result" })
  result: Map<string, any>;
}
