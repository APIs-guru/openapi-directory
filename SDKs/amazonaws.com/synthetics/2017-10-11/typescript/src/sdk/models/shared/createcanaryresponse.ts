import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Canary } from "./canary";


export class CreateCanaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Canary" })
  canary?: Canary;
}
