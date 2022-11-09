import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticatePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey: string;
}
