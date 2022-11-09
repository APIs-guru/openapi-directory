import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Canary } from "./canary";


export class GetCanaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Canary" })
  canary?: Canary;
}
