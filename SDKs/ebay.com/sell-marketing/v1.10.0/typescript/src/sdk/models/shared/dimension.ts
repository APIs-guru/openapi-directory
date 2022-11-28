import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimension
/** 
 * This type defines the annotation and dimension key used by the report. For information on how to set these values, see Reading Promoted Listings reports.
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationKeys" })
  annotationKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=dimensionKey" })
  dimensionKey?: string;
}
