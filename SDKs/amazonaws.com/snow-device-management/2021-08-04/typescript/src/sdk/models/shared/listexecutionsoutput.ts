import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionSummary } from "./executionsummary";


export class ListExecutionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: shared.ExecutionSummary })
  executions?: ExecutionSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
