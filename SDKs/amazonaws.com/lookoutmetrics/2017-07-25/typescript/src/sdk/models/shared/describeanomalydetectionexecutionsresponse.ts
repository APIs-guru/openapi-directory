import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatus } from "./executionstatus";



export class DescribeAnomalyDetectionExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionList", elemType: ExecutionStatus })
  executionList?: ExecutionStatus[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
