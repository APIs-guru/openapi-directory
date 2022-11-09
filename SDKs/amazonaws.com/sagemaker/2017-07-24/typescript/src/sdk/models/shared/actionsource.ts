import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionSource
/** 
 * A structure describing the source of an action.
**/
export class ActionSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceId" })
  sourceId?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "json, name=SourceUri" })
  sourceUri: string;
}
