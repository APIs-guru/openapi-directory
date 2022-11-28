import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A contiguous set of minutes: startMinutesAgo, startMinutesAgo + 1, ..., endMinutesAgo. Requests are allowed up to 2 minute ranges.
**/
export declare class MinuteRange extends SpeakeasyBase {
    endMinutesAgo?: number;
    name?: string;
    startMinutesAgo?: number;
}
