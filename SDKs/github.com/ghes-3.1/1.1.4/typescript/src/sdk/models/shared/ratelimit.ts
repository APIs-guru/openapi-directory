import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RateLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining: number;

  @SpeakeasyMetadata({ data: "json, name=reset" })
  reset: number;
}
