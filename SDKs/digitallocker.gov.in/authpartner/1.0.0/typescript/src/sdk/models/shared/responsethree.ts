import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponseThree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}
