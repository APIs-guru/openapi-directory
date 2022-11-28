import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SnsMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base64_message" })
  base64Message?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
