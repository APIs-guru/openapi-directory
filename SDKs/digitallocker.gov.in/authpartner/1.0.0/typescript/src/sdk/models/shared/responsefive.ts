import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponseFive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}
