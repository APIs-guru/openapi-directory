import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskSummary } from "./tasksummary";


export class ListTasksOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.TaskSummary })
  tasks?: TaskSummary[];
}
