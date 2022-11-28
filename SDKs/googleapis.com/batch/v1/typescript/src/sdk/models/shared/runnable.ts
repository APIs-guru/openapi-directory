import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Barrier } from "./barrier";
import { Container } from "./container";
import { Environment } from "./environment";
import { Script } from "./script";



// Runnable
/** 
 * Runnable describes instructions for executing a specific script or container as part of a Task.
**/
export class Runnable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alwaysRun" })
  alwaysRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: boolean;

  @SpeakeasyMetadata({ data: "json, name=barrier" })
  barrier?: Barrier;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: Container;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=ignoreExitStatus" })
  ignoreExitStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: Script;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
