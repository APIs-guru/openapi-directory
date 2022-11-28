import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { TaskList } from "./tasklist";



export class RegisterWorkflowTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultChildPolicy" })
  defaultChildPolicy?: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultExecutionStartToCloseTimeout" })
  defaultExecutionStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLambdaRole" })
  defaultLambdaRole?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskList" })
  defaultTaskList?: TaskList;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskPriority" })
  defaultTaskPriority?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTaskStartToCloseTimeout" })
  defaultTaskStartToCloseTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
