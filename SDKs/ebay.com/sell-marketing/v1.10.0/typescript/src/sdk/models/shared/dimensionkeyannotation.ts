import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionKeyAnnotation
/** 
 * This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be listing_title or listing_quantity_sold.
**/
export class DimensionKeyAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationKey" })
  annotationKey?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;
}
