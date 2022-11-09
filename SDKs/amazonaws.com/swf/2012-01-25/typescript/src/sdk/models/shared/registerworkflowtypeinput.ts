import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";


export class RegisterWorkflowTypeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultChildPolicy" })
  defaultChildPolicy?: ChildPolicyEnum;

  @Metadata({ data: "json, name=defaultExecutionStartToCloseTimeout" })
  defaultExecutionStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=defaultLambdaRole" })
  defaultLambdaRole?: string;

  @Metadata({ data: "json, name=defaultTaskList" })
  defaultTaskList?: TaskList;

  @Metadata({ data: "json, name=defaultTaskPriority" })
  defaultTaskPriority?: string;

  @Metadata({ data: "json, name=defaultTaskStartToCloseTimeout" })
  defaultTaskStartToCloseTimeout?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
