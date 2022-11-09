import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SegmentReference
/** 
 * Specifies the segment identifier and version of a segment.
**/
export class SegmentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
