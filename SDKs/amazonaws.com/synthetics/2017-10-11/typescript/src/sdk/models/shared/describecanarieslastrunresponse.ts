import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryLastRun } from "./canarylastrun";



export class DescribeCanariesLastRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CanariesLastRun", elemType: CanaryLastRun })
  canariesLastRun?: CanaryLastRun[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
