import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticatePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey: string;
}
