import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TokenCreatePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}
