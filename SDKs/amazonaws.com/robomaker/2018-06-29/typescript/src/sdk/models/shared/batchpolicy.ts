import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchPolicy
/** 
 * Information about the batch policy.
**/
export class BatchPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxConcurrency" })
  maxConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
