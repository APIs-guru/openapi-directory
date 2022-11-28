import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// Event
/** 
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a node.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;
}
