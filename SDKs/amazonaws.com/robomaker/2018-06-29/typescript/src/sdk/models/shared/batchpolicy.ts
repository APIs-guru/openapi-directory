import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchPolicy
/** 
 * Information about the batch policy.
**/
export class BatchPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxConcurrency" })
  maxConcurrency?: number;

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
