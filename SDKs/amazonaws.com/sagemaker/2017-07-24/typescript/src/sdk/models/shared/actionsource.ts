import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionSource
/** 
 * A structure describing the source of an action.
**/
export class ActionSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceUri" })
  sourceUri: string;
}
