import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Insight } from "./insight";



export class GetInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Insights", elemType: Insight })
  insights: Insight[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
