import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// Event
/** 
 * Describes an event.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  date?: Date;

  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  eventId?: string;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  severity?: string;

  @SpeakeasyMetadata()
  sourceIdentifier?: string;

  @SpeakeasyMetadata()
  sourceType?: SourceTypeEnum;
}
