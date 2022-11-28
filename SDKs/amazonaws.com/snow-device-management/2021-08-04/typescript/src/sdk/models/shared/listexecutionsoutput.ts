import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionSummary } from "./executionsummary";



export class ListExecutionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: ExecutionSummary })
  executions?: ExecutionSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
