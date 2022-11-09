import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
