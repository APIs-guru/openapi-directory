import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CaptionsUpdatePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: boolean;
}
