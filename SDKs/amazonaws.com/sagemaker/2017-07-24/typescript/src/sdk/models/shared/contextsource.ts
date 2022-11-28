import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContextSource
/** 
 * A structure describing the source of a context.
**/
export class ContextSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceUri" })
  sourceUri: string;
}
