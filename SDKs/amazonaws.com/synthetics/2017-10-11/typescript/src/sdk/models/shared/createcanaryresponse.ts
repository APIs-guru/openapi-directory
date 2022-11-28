import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Canary } from "./canary";



export class CreateCanaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Canary" })
  canary?: Canary;
}
