import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimension
/** 
 * This type defines the annotation and dimension key used by the report. For information on how to set these values, see Reading Promoted Listings reports.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationKeys" })
  annotationKeys?: string[];

  @Metadata({ data: "json, name=dimensionKey" })
  dimensionKey?: string;
}
