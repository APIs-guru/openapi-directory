import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolExceptionReasonEnum } from "./protocolexceptionreasonenum";



export class ProtocolException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=methodIndex" })
  methodIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=methodName" })
  methodName?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: ProtocolExceptionReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=retryWithDelay" })
  retryWithDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=trace" })
  trace?: string[];
}
