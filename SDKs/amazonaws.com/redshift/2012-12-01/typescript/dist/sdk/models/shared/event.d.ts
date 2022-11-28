import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Describes an event.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    eventCategories?: string[];
    eventId?: string;
    message?: string;
    severity?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
