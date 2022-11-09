import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HeroImage } from "./heroimage";
import { LocationEvent } from "./locationevent";


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=child_event_count" })
  childEventCount?: number;

  @Metadata({ data: "json, name=editorial_segments" })
  editorialSegments?: string[];

  @Metadata({ data: "json, name=hero_image" })
  heroImage?: HeroImage;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image_count" })
  imageCount?: number;

  @Metadata({ data: "json, name=location" })
  location?: LocationEvent;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;
}
