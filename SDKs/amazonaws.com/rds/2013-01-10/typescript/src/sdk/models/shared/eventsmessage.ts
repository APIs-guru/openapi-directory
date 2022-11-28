import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata()
  marker?: string;
}
