import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContextSource
/** 
 * A structure describing the source of a context.
**/
export class ContextSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceId" })
  sourceId?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=SourceUri" })
  sourceUri: string;
}
