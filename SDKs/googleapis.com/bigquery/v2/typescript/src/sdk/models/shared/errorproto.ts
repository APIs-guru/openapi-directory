import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
