import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotationValue } from "./annotationvalue";
import { ServiceId } from "./serviceid";


// ValueWithServiceIds
/** 
 * Information about a segment annotation.
**/
export class ValueWithServiceIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnnotationValue" })
  annotationValue?: AnnotationValue;

  @Metadata({ data: "json, name=ServiceIds", elemType: shared.ServiceId })
  serviceIds?: ServiceId[];
}
