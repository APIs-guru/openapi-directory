import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RateLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit: number;

  @Metadata({ data: "json, name=remaining" })
  remaining: number;

  @Metadata({ data: "json, name=reset" })
  reset: number;
}
