import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenCreatePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}
