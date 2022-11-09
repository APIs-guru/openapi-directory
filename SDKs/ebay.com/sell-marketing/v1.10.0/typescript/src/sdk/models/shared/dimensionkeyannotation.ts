import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionKeyAnnotation
/** 
 * This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be listing_title or listing_quantity_sold.
**/
export class DimensionKeyAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationKey" })
  annotationKey?: string;

  @Metadata({ data: "json, name=dataType" })
  dataType?: string;
}
