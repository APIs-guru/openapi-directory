import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
**/
export declare class TimeOfDay extends SpeakeasyBase {
    hours?: number;
    minutes?: number;
    nanos?: number;
    seconds?: number;
}
