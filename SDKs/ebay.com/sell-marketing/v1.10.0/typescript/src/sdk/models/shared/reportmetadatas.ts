import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportMetadata } from "./reportmetadata";


// ReportMetadatas
/** 
 * This type defines the metadata used by the all report types.
**/
export class ReportMetadatas extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportMetadata", elemType: shared.ReportMetadata })
  reportMetadata?: ReportMetadata[];
}
