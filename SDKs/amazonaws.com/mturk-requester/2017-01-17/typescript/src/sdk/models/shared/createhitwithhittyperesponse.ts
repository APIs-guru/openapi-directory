import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hit } from "./hit";



export class CreateHitWithHitTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HIT" })
  hit?: Hit;
}
