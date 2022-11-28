import { SpeakeasyBase } from "../../../internal/utils";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";
export declare class StudioComponentSummary extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    name?: string;
    studioComponentId?: string;
    subtype?: StudioComponentSubtypeEnum;
    type?: StudioComponentTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
