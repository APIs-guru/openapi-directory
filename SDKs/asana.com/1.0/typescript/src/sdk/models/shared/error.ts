import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=help" })
  help?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=phrase" })
  phrase?: string;
}
