import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeroImage } from "./heroimage";
import { LocationEvent } from "./locationevent";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=child_event_count" })
  childEventCount?: number;

  @SpeakeasyMetadata({ data: "json, name=editorial_segments" })
  editorialSegments?: string[];

  @SpeakeasyMetadata({ data: "json, name=hero_image" })
  heroImage?: HeroImage;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image_count" })
  imageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: LocationEvent;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}
