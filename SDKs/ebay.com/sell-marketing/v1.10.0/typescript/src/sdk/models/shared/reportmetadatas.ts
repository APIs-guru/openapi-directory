import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportMetadata } from "./reportmetadata";



// ReportMetadatas
/** 
 * This type defines the metadata used by the all report types.
**/
export class ReportMetadatas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportMetadata", elemType: ReportMetadata })
  reportMetadata?: ReportMetadata[];
}
