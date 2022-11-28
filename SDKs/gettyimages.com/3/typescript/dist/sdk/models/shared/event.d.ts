import { SpeakeasyBase } from "../../../internal/utils";
import { HeroImage } from "./heroimage";
import { LocationEvent } from "./locationevent";
export declare class Event extends SpeakeasyBase {
    childEventCount?: number;
    editorialSegments?: string[];
    heroImage?: HeroImage;
    id?: number;
    imageCount?: number;
    location?: LocationEvent;
    name?: string;
    startDate?: Date;
}
