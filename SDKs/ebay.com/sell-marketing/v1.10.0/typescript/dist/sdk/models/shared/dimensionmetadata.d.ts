import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionKeyAnnotation } from "./dimensionkeyannotation";
/**
 * This type defines the dimension used to create the report and the annotation keys associated with that dimension.
**/
export declare class DimensionMetadata extends SpeakeasyBase {
    dataType?: string;
    dimensionKey?: string;
    dimensionKeyAnnotations?: DimensionKeyAnnotation[];
}
