import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AvailabilityRequestClosestEnum {
    Either = "either",
    After = "after",
    Before = "before"
}
export declare class AvailabilityRequest extends SpeakeasyBase {
    closest?: AvailabilityRequestClosestEnum;
    tag?: string;
    timestamp?: string;
    url: string;
}
