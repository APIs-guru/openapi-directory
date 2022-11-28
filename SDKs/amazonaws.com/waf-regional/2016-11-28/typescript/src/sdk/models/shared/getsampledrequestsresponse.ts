import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SampledHttpRequest } from "./sampledhttprequest";
import { TimeWindow } from "./timewindow";



export class GetSampledRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PopulationSize" })
  populationSize?: number;

  @SpeakeasyMetadata({ data: "json, name=SampledRequests", elemType: SampledHttpRequest })
  sampledRequests?: SampledHttpRequest[];

  @SpeakeasyMetadata({ data: "json, name=TimeWindow" })
  timeWindow?: TimeWindow;
}
