import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskSummary } from "./tasksummary";



export class ListTasksOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: TaskSummary })
  tasks?: TaskSummary[];
}
