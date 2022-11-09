import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribute } from "./attribute";
import { Measurement } from "./measurement";
import { Metric } from "./metric";
import { Transform } from "./transform";
/**
 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
**/
export declare class PropertyType extends SpeakeasyBase {
    attribute?: Attribute;
    measurement?: Measurement;
    metric?: Metric;
    transform?: Transform;
}
