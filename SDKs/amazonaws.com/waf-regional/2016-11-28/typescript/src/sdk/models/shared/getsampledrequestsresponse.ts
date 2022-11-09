import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SampledHttpRequest } from "./sampledhttprequest";
import { TimeWindow } from "./timewindow";


export class GetSampledRequestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PopulationSize" })
  populationSize?: number;

  @Metadata({ data: "json, name=SampledRequests", elemType: shared.SampledHttpRequest })
  sampledRequests?: SampledHttpRequest[];

  @Metadata({ data: "json, name=TimeWindow" })
  timeWindow?: TimeWindow;
}
