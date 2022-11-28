import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheHitResult
/** 
 * Details on the cache hit of a pipeline execution step.
**/
export class CacheHitResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourcePipelineExecutionArn" })
  sourcePipelineExecutionArn?: string;
}
