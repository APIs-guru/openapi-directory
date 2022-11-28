import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { TaskSpec } from "./taskspec";



// TaskGroup
/** 
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
export class TaskGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: string;

  @SpeakeasyMetadata({ data: "json, name=permissiveSsh" })
  permissiveSsh?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireHostsFile" })
  requireHostsFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taskCount" })
  taskCount?: string;

  @SpeakeasyMetadata({ data: "json, name=taskCountPerNode" })
  taskCountPerNode?: string;

  @SpeakeasyMetadata({ data: "json, name=taskEnvironments", elemType: Environment })
  taskEnvironments?: Environment[];

  @SpeakeasyMetadata({ data: "json, name=taskSpec" })
  taskSpec?: TaskSpec;
}


// TaskGroupInput
/** 
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
export class TaskGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: string;

  @SpeakeasyMetadata({ data: "json, name=permissiveSsh" })
  permissiveSsh?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireHostsFile" })
  requireHostsFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taskCount" })
  taskCount?: string;

  @SpeakeasyMetadata({ data: "json, name=taskCountPerNode" })
  taskCountPerNode?: string;

  @SpeakeasyMetadata({ data: "json, name=taskEnvironments", elemType: Environment })
  taskEnvironments?: Environment[];

  @SpeakeasyMetadata({ data: "json, name=taskSpec" })
  taskSpec?: TaskSpec;
}
