import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CacheHitResult
/** 
 * Details on the cache hit of a pipeline execution step.
**/
export class CacheHitResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourcePipelineExecutionArn" })
  sourcePipelineExecutionArn?: string;
}
