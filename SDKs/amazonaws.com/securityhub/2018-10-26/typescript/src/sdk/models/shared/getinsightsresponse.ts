import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Insight } from "./insight";


export class GetInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Insights", elemType: shared.Insight })
  insights: Insight[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
