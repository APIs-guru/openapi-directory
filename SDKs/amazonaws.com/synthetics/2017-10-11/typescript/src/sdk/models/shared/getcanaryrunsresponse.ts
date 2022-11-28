import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryRun } from "./canaryrun";



export class GetCanaryRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CanaryRuns", elemType: CanaryRun })
  canaryRuns?: CanaryRun[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
