import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Insight } from "./insight";


export class GetInsightResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Insight" })
  insight?: Insight;
}
