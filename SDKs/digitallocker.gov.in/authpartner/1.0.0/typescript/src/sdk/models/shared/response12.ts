import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Response12 extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}
