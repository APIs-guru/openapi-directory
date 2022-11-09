import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceTypeEnum } from "./sourcetypeenum";


// Event
/** 
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a node.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;
}
