import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CanaryLastRun } from "./canarylastrun";


export class DescribeCanariesLastRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CanariesLastRun", elemType: shared.CanaryLastRun })
  canariesLastRun?: CanaryLastRun[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
