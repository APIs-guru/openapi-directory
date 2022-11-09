import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Hit } from "./hit";


export class GetHitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HIT" })
  hit?: Hit;
}
