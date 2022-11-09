import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionKeyAnnotation } from "./dimensionkeyannotation";


// DimensionMetadata
/** 
 * This type defines the dimension used to create the report and the annotation keys associated with that dimension.
**/
export class DimensionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: string;

  @Metadata({ data: "json, name=dimensionKey" })
  dimensionKey?: string;

  @Metadata({ data: "json, name=dimensionKeyAnnotations", elemType: shared.DimensionKeyAnnotation })
  dimensionKeyAnnotations?: DimensionKeyAnnotation[];
}
