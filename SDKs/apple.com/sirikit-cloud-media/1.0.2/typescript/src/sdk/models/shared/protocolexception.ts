import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtocolExceptionReasonEnum } from "./protocolexceptionreasonenum";


export class ProtocolException extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=methodIndex" })
  methodIndex?: number;

  @Metadata({ data: "json, name=methodName" })
  methodName?: string;

  @Metadata({ data: "json, name=reason" })
  reason: ProtocolExceptionReasonEnum;

  @Metadata({ data: "json, name=retryWithDelay" })
  retryWithDelay?: number;

  @Metadata({ data: "json, name=trace" })
  trace?: string[];
}
