import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Insight } from "./insight";



export class GetInsightResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Insight" })
  insight?: Insight;
}
