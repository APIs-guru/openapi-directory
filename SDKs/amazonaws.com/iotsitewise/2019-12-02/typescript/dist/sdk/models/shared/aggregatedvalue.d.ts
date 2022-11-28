import { SpeakeasyBase } from "../../../internal/utils";
import { QualityEnum } from "./qualityenum";
import { Aggregates } from "./aggregates";
/**
 * Contains aggregated asset property values (for example, average, minimum, and maximum).
**/
export declare class AggregatedValue extends SpeakeasyBase {
    quality?: QualityEnum;
    timestamp: Date;
    value: Aggregates;
}
