import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationValue } from "./annotationvalue";
import { ServiceId } from "./serviceid";
/**
 * Information about a segment annotation.
**/
export declare class ValueWithServiceIds extends SpeakeasyBase {
    annotationValue?: AnnotationValue;
    serviceIds?: ServiceId[];
}
