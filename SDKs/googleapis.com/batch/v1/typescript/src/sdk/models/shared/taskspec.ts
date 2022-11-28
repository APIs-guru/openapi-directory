import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeResource } from "./computeresource";
import { Environment } from "./environment";
import { LifecyclePolicy } from "./lifecyclepolicy";
import { Runnable } from "./runnable";
import { Volume } from "./volume";



// TaskSpec
/** 
 * Spec of a task
**/
export class TaskSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeResource" })
  computeResource?: ComputeResource;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=environments" })
  environments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifecyclePolicies", elemType: LifecyclePolicy })
  lifecyclePolicies?: LifecyclePolicy[];

  @SpeakeasyMetadata({ data: "json, name=maxRetryCount" })
  maxRetryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxRunDuration" })
  maxRunDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=runnables", elemType: Runnable })
  runnables?: Runnable[];

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
