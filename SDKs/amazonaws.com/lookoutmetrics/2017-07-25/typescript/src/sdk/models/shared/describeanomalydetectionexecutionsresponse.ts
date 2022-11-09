import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionStatus } from "./executionstatus";


export class DescribeAnomalyDetectionExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionList", elemType: shared.ExecutionStatus })
  executionList?: ExecutionStatus[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
