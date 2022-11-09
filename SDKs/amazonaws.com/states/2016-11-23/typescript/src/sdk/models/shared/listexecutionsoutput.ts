import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionListItem } from "./executionlistitem";


export class ListExecutionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: shared.ExecutionListItem })
  executions: ExecutionListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
