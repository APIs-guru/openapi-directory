import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorError;
}
