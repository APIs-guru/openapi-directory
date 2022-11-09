import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ErrorError;
}
