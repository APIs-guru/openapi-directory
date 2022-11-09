import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CanaryRun } from "./canaryrun";


export class GetCanaryRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CanaryRuns", elemType: shared.CanaryRun })
  canaryRuns?: CanaryRun[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
