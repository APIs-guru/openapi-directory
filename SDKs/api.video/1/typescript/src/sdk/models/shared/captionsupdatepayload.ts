import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CaptionsUpdatePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;
}
