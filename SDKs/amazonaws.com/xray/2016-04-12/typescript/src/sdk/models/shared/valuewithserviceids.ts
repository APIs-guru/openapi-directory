import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationValue } from "./annotationvalue";
import { ServiceId } from "./serviceid";



// ValueWithServiceIds
/** 
 * Information about a segment annotation.
**/
export class ValueWithServiceIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnnotationValue" })
  annotationValue?: AnnotationValue;

  @SpeakeasyMetadata({ data: "json, name=ServiceIds", elemType: ServiceId })
  serviceIds?: ServiceId[];
}
