import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionKeyAnnotation } from "./dimensionkeyannotation";



// DimensionMetadata
/** 
 * This type defines the dimension used to create the report and the annotation keys associated with that dimension.
**/
export class DimensionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionKey" })
  dimensionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionKeyAnnotations", elemType: DimensionKeyAnnotation })
  dimensionKeyAnnotations?: DimensionKeyAnnotation[];
}
