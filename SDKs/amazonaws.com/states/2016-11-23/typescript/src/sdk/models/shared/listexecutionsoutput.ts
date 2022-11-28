import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionListItem } from "./executionlistitem";



export class ListExecutionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: ExecutionListItem })
  executions: ExecutionListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
